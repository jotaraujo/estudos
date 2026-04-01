import { createContext, useEffect, useState } from "react"
import {
  DndContext,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import TaskForm from "./TaskForm"
import Column from "./Column"
import styles from "../styles/KanbanBoard.module.css"

export const KanbanContext = createContext()

const STORAGE_KEY = "kanban-tasks"

const defaultTasks = [
  { id: 1, title: 'Nome da Tarefa', description: 'Descrição da Tarefa', status: 'todo' },
  { id: 2, title: 'Nome da Tarefa', description: 'Descrição da Tarefa', status: 'done' },
  { id: 3, title: 'Nome da Tarefa', description: 'Descrição da Tarefa', status: 'inProgress' },
]

const loadTasks = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : defaultTasks
  } catch {
    return defaultTasks
  }
}

export const KanbanBoard = () => {
  const [tasks, setTasks] = useState(loadTasks)
  const [activeId, setActiveId] = useState(null)

  // Configurar sensores para detectar drag (mouse, touch, teclado)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  // Grava no localStorage toda vez que tasks mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const handleNewTask = (title, description) => {
    setTasks([...tasks, {
      id: Date.now(),
      title,
      description,
      status: 'todo',
    }])
  }

  const handleNewStatus = (id, status) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, status } : task))
  }

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleDragStart = (event) => {
    setActiveId(event.active.id)
  }

  const handleDragEnd = (event) => {
    const { active, over } = event
    setActiveId(null)

    if (over && active.id !== over.id) {
      let newStatus = over.id
      
      // Se over.id é um número, é um card. Precisa encontrar sua coluna
      if (typeof over.id === 'number') {
        const overTask = tasks.find(t => t.id === over.id)
        newStatus = overTask?.status || 'todo'
      }
      
      handleNewStatus(active.id, newStatus)
    }
  }

  return (
    <div className={styles.board}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <KanbanContext.Provider value={{ handleNewStatus, handleDeleteTask, activeId }}>
          <TaskForm task={handleNewTask} />
          <div className={styles.columns}>
            <Column tasks={tasks} status="todo" label="To Do" />
            <Column tasks={tasks} status="inProgress" label="Doing" />
            <Column tasks={tasks} status="done" label="Done" />
          </div>
        </KanbanContext.Provider>
      </DndContext>
    </div>
  )
}

export default KanbanBoard
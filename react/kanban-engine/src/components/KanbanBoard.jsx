import { createContext, useEffect, useState } from "react"
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

  return (
    <div className={styles.board}>
      <KanbanContext.Provider value={{ handleNewStatus, handleDeleteTask }}>
        <TaskForm task={handleNewTask} />
        <div className={styles.columns}>
          <Column tasks={tasks} status="todo" label="To Do" />
          <Column tasks={tasks} status="inProgress" label="Doing" />
          <Column tasks={tasks} status="done" label="Done" />
        </div>
      </KanbanContext.Provider>
    </div>
  )
}

export default KanbanBoard
import { useContext } from 'react'
import { useSortable, defaultAnimateLayoutChanges } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { KanbanContext } from './KanbanBoard'
import styles from '../styles/TaskItem.module.css'

const TaskItem = ({ task, status }) => {
  const { handleNewStatus, handleDeleteTask } = useContext(KanbanContext)
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: task.id,
    animateLayoutChanges: defaultAnimateLayoutChanges,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || 'all 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    opacity: isDragging ? 0.5 : 1,
  }

  if (!task) return null

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${styles.card} ${isDragging ? styles.dragging : ''}`}
      {...attributes}
      {...listeners}
    >
      {/* Header com Título */}
      <div className={styles.header}>
        <p className={styles.title}>{task.title}</p>
      </div>

      {/* Descrição */}
      <p className={styles.description}>{task.description}</p>

      {/* Botões de Ação */}
      <div className={styles.actions}>
        {status === 'todo' && (
          <button
            className={`${styles.btn} ${styles.btnMove}`}
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              handleNewStatus(task.id, 'inProgress')
            }}
          >
            → Doing
          </button>
        )}
        {status === 'inProgress' && (
          <>
            <button
              className={`${styles.btn} ${styles.btnBack}`}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleNewStatus(task.id, 'todo')
              }}
            >
              ← To Do
            </button>
            <button
              className={`${styles.btn} ${styles.btnMove}`}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleNewStatus(task.id, 'done')
              }}
            >
              → Done
            </button>
          </>
        )}
        {status === 'done' && (
          <>
            <button
              className={`${styles.btn} ${styles.btnBack}`}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleNewStatus(task.id, 'inProgress')
              }}
            >
              ← Doing
            </button>
            <button
              className={`${styles.btn} ${styles.btnDelete}`}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleDeleteTask(task.id)
              }}
            >
              Excluir
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default TaskItem

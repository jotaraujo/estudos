import { useContext } from "react"
import { KanbanContext } from "./KanbanBoard"
import styles from "../styles/TaskItem.module.css"

const TaskItem = ({ task, status }) => {
  const { handleNewStatus, handleDeleteTask } = useContext(KanbanContext)

  if (!task) return null

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p className={styles.title}>{task.title}</p>
      </div>
      <p className={styles.description}>{task.description}</p>
      <div className={styles.actions}>
        {status === 'todo' && (
          <button
            className={`${styles.btn} ${styles.btnMove}`}
            type="button"
            onClick={() => handleNewStatus(task.id, 'inProgress')}
          >
            → Doing
          </button>
        )}
        {status === 'inProgress' && (
          <>
            <button
              className={`${styles.btn} ${styles.btnBack}`}
              type="button"
              onClick={() => handleNewStatus(task.id, 'todo')}
            >
              ← To Do
            </button>
            <button
              className={`${styles.btn} ${styles.btnMove}`}
              type="button"
              onClick={() => handleNewStatus(task.id, 'done')}
            >
              → Done
            </button>
          </>
        )}
        {status === 'done' && (
          <button
            className={`${styles.btn} ${styles.btnBack}`}
            type="button"
            onClick={() => handleNewStatus(task.id, 'inProgress')}
          >
            ← Doing
          </button>
        )}
        <button
          className={`${styles.btn} ${styles.btnDelete}`}
          type="button"
          onClick={() => handleDeleteTask(task.id)}
        >
          Excluir
        </button>
      </div>
    </div>
  )
}

export default TaskItem
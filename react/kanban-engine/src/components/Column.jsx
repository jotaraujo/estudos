import TaskItem from "./TaskItem"
import styles from "../styles/Column.module.css"

const statusClass = {
  todo: styles.columnTodo,
  inProgress: styles.columnInProgress,
  done: styles.columnDone,
}

const Column = ({ tasks, status, label }) => {
  return (
    <div className={`${styles.column} ${statusClass[status]}`}>
      <h2 className={styles.title}>{label}</h2>
      <div className={styles.cards}>
        {tasks.filter((task) => task.status === status).map((task) => (
          <TaskItem key={task.id} task={task} status={status} />
        ))}
      </div>
    </div>
  )
}

export default Column
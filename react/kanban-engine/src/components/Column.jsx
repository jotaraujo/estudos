import { useDroppable } from "@dnd-kit/core"
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import TaskItem from "./TaskItem"
import styles from "../styles/Column.module.css"

const statusClass = {
  todo: styles.columnTodo,
  inProgress: styles.columnInProgress,
  done: styles.columnDone,
}

const Column = ({ tasks, status, label }) => {
  const { setNodeRef } = useDroppable({
    id: status,
  })

  const columnTasks = tasks.filter((task) => task.status === status)
  const taskIds = columnTasks.map((task) => task.id)

  return (
    <div
      ref={setNodeRef}
      className={`${styles.column} ${statusClass[status]}`}
    >
      <h2 className={styles.title}>{label}</h2>
      <div className={styles.cards}>
        <SortableContext
          items={taskIds}
          strategy={verticalListSortingStrategy}
        >
          {columnTasks.map((task) => (
            <TaskItem key={task.id} task={task} status={status} />
          ))}
        </SortableContext>
      </div>
    </div>
  )
}

export default Column
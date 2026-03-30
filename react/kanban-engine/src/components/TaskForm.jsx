import { useState } from "react"
import styles from "../styles/TaskForm.module.css"

const TaskForm = ({ task }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleTask = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    task(title, description)
    setTitle('')
    setDescription('')
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleTask}>
        <input
          className={styles.input}
          type="text"
          placeholder="Título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className={styles.btn} type="submit">
          + Adicionar
        </button>
      </form>
    </div>
  )
}

export default TaskForm
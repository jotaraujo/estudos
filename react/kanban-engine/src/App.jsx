import KanbanBoard from "./components/KanbanBoard"
import { ThemeToggle } from "./components/ThemeToggle"
import { useTheme } from "./hooks/useTheme"
import styles from "./styles/App.module.css"

function App() {
  // Inicializa o tema ao montar o componente
  useTheme()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Kanban Engine</h1>
        <ThemeToggle />
      </header>
      <KanbanBoard />
    </div>
  )
}

export default App

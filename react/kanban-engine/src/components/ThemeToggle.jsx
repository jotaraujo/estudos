import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import styles from '../styles/ThemeToggle.module.css'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className={styles.toggleButton}
      onClick={toggleTheme}
      aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      title={`Tema ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      <div className={styles.iconWrapper}>
        {theme === 'light' ? (
          <Moon size={20} className={styles.icon} />
        ) : (
          <Sun size={20} className={styles.icon} />
        )}
      </div>
    </button>
  )
}

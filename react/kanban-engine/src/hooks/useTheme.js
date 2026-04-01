import { useState, useEffect } from 'react'

/**
 * Hook para gerenciar tema light/dark com persistência
 * Detecta preferência do sistema e permite toggle manual
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Verifica localStorage primeiro
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme

    // Detecta preferência do sistema
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  // Aplica tema ao elemento raiz e persiste no localStorage
  useEffect(() => {
    const html = document.documentElement
    html.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Toggle entre light e dark
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return { theme, toggleTheme }
}

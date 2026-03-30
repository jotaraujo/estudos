import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeProvider"

const ThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <button type="button" onClick={toggleTheme}>Mudar Tema</button>
  )
}

export default ThemeButton
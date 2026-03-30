import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeProvider"
import ThemeButton from "./ThemeButton"

const Header = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div>
      <h1>Tema atual: {theme}</h1>
      <ThemeButton />
    </div>

  )
}

export default Header
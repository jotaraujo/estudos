import { useContext } from "react"
import Header from "./Components/Header"
import { ThemeContext } from "./Context/ThemeProvider"

function App() {

  const { theme } = useContext(ThemeContext)

  return (
    <div className={`app-container ${theme}`}>
      <Header />
    </div>
  )
}

export default App

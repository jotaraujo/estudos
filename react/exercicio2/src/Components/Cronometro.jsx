import { useEffect, useState } from "react"
import Button from "./ui/Button"

const Cronometro = () => {
  const [time, setTime] = useState(0)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if(active){
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1) //prevTime é o valor anterior garantido de time
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [active])

  return (
    <div>
      <h1>{time}</h1>
      <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
        {active ? (
          <Button text="Parar" onClick={() => setActive(false)} />
        ): (
          <Button text="Iniciar" onClick={() => setActive(true)} />
        )}
        <Button text="Resetar" onClick={() => { setActive(false); setTime(0) }} />
      </div>
    </div>
  )
}

export default Cronometro
import { useState } from "react"

const Jogadores = () => {
  const [players, setPlayers] = useState([{
    id: 1,
    name: 'Jogador 1',
    role: 'Não definido'
  },
  {
    id: 2,
    name: 'Jogador 2',
    role: 'Não definido'
  },
  {
    id: 3,
    name: 'Jogador 3',
    role: 'Não definido'
  },
  {
    id: 4,
    name: 'Jogador 4',
    role: 'Não definido'
  }
])
const [roles] = useState(['Não definido','Atacante', 'Defensor', 'Meio-campista', 'Goleiro'])

const handleRole = (id, role) => {
  setPlayers(players.map((player) => player.id === id ? { ...player, role } : player))
}

  return (
    <div>
      {players.map((player) => (
        <ul key={player.id}>
          <li>{player.name}</li>
          <li>{player.role}</li>
          <select name="role" value={player.role} onChange={(e) => handleRole(player.id, e.target.value)}>
            {roles.map((role) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </ul>
      ))}
    </div>
  )
}

export default Jogadores
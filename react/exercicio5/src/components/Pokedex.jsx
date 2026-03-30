import { useState } from "react"
import useFetch from "../hooks/useFetch"

const Pokedex = () => {
  const [pokemonId, setPokemonId] = useState(1)
  const { data, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

  const handleNextPokemon = () => {
    setPokemonId(pokemonId + 1)
  }

  const handlePreviousPokemon = () => {
    setPokemonId(pokemonId - 1)
  }
  return (
    <div>
      {loading && <p>Carregando...</p>}
      {error && <p>Erro ao carregar</p>}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <img src={data.sprites.front_default} alt={data.name} />
          <button type="button" onClick={handlePreviousPokemon}>Antes</button>
          <button type="button" onClick={handleNextPokemon}>Próximo</button>
        </div>
      )}
    </div>
  )
}

export default Pokedex
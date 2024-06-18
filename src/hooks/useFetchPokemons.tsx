import { useEffect, useState } from 'react'
import { BASE_URL } from '../config/config'
import { Pokemon } from '../types/Pokemon'
import { mapPokemon } from '../utils/PokemonMapper/PokemonMapper'
import { PokeApiResponse } from '../types/PokemonResponse'
import { PaginationResponse } from '../types/PaginationResponse'

export const useGetPokemons = (numberOfPokemons: number = 150) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsloading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `${BASE_URL}?limit=${numberOfPokemons}&offset=0`,
        )
        const paginationResponse: PaginationResponse = await data.json()

        const promises = paginationResponse.results.map(async pokemonDTO => {
          const response = await fetch(`${BASE_URL}${pokemonDTO.name}`)
          const pokeApiResponse: PokeApiResponse = await response.json()
          const pokemonMapped = mapPokemon(pokeApiResponse)

          return pokemonMapped
        })
        
        setPokemons(await Promise.all(promises))
      } catch (error) {
        setError(true)
      } finally {
        setIsloading(false)
      }
    }

    fetchData()
  }, [numberOfPokemons])

  return { pokemons, isLoading, error }
}

import { useEffect, useState } from 'react'
import { BASE_URL } from '../config/config'
import { Pokemon } from '../models/Pokemon'
import { mapPokemon } from '../utils/PokemonMapper/PokemonMapper'
import { PokeApiResponse } from '../models/PokemonResponse'
import { PaginationResponse } from '../models/PaginationResponse'

export const useGetPokemons = (numberOfPokemons: number) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsloading] = useState<boolean>(true)

  useEffect(() => {

    const fetchData = async () => {
      const data = await fetch(`${BASE_URL}?limit=${numberOfPokemons}&offset=0`)
      const paginationResponse: PaginationResponse = await data.json()

      const promises = paginationResponse.results.map(async pokemonDTO => {
        const response = await fetch(`${BASE_URL}${pokemonDTO.name}`)
        const pokeApiResponse: PokeApiResponse = await response.json()
        const pokemonMapped = mapPokemon(pokeApiResponse);

        return pokemonMapped
      })

      setPokemons(await Promise.all(promises))
      setIsloading(false)
    }

    fetchData()  
  },[numberOfPokemons])

  return {pokemons, isLoading}
}

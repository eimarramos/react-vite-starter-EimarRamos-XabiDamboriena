import { useEffect, useState } from 'react'
import { BASE_URL } from '../config/config'
import { Pokemon } from '../models/Pokemon'
import { mapPokemon } from '../utils/PokemonMapper/PokemonMapper'
import { PokeApiResponse } from '../models/PokemonResponse'
import { PaginationResponse } from '../models/PaginationResponse'

type GetPokemonResult = {
  data?: Pokemon
}

export const useGetPokemon = (name: string): GetPokemonResult => {
  const [data, setData] = useState<Pokemon>()

  useEffect(() => {
    fetch(`${BASE_URL}${name}`)
      .then(response => response.json())
      .then((response: PokeApiResponse) => {
        setData(mapPokemon(response))
      })
      .catch(console.log)
  }, [name])

  return { data }
}

export const useGetPokemons = (): Pokemon[] => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(BASE_URL)
      const paginationResponse: PaginationResponse = await data.json()
      paginationResponse.results.forEach(async result => {
        const pokemonData = await fetch(`${BASE_URL}${result.name}`)
        const pokeApiResponse: PokeApiResponse = await pokemonData.json()
        const pokemonMapped = mapPokemon(pokeApiResponse);
        setPokemons(prev => [...prev, pokemonMapped])
      })
    }
     fetchData().catch(console.error)
  },[])
  return pokemons
}

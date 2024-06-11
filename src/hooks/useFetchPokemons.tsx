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

export const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsloading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true)
      const data = await fetch(`${BASE_URL}?limit=100&offset=0`)
      const paginationResponse: PaginationResponse = await data.json()
      paginationResponse.results.forEach(async result => {
        const pokemonData = await fetch(`${BASE_URL}${result.name}`)
        const pokeApiResponse: PokeApiResponse = await pokemonData.json()
        const pokemonMapped = mapPokemon(pokeApiResponse);
        setPokemons(prev => [...prev, pokemonMapped])
      })
      setIsloading(false)
    }
      fetchData()  
  },[])

  return {pokemons, isLoading}
}

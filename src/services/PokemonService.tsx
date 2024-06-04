import { useEffect, useState } from 'react'
import { BASE_URL } from '../config/config'
import { Pokemon } from '../models/Pokemon'
import { PokeApiResponse } from '../models/PokeApiResponse'
import { mapPokemon } from '../utils/PokemonMapper'

interface GetPokemonResult {
  data?: Pokemon
}

export const GetPokemon = (name: string): GetPokemonResult => {
  const [data, setData] = useState<Pokemon>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}${name}`)
      const result: PokeApiResponse = await response.json()
      const mappedPokemon = mapPokemon(result)
      setData(mappedPokemon)
    }
    fetchData()
  },[name])

  return { data }
}

import { useEffect, useState } from 'react'
import { BASE_URL } from '../config/config'
import { Pokemon } from '../models/Pokemon'
import { mapPokemon } from '../utils/PokemonMapper'
import { PokeApiResponse } from '../models/PokeApiResponse'


type GetPokemonResult = {
  data?: Pokemon
}

export const GetPokemon = (name: string): GetPokemonResult => {
  const [data, setData] = useState<Pokemon>()

  const fetchData = async () => {
    const response = await fetch(`${BASE_URL}${name}`)
    const result: PokeApiResponse = await response.json()
    const mappedPokemon = mapPokemon(result)
    setData(mappedPokemon)
  }

  useEffect(() => { 
    fetchData()
  })

  return { data }
}
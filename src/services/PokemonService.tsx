import { useEffect, useState } from 'react'
import { BASE_URL } from '../config/config'
import { Pokemon } from '../models/Pokemon'
import { mapPokemon } from '../utils/PokemonMapper'
import { PokeApiResponse } from '../models/PokeApiResponse'

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

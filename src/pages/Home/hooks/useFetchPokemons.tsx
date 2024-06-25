import { useEffect, useState } from 'react'
import { pokemonService } from '../../../domain/pokemon/services/pokemonService/pokemonService'
import { Pokemon } from '../../../infrastructure/api/pokeapi/types/Pokemon'


export const useGetPokemons = (numberOfPokemons: number = 150) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsloading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getPokemons = await pokemonService.getPokemons()

        setPokemons(getPokemons)
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

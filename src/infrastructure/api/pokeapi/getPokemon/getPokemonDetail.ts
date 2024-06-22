import { BASE_URL } from '../../../../config/config'
import { PaginationResponse } from '../../../../types/PaginationResponse'
import { PokeApiDTO } from '../../../../infrastructure/api/pokeapi/types/PokeApiDTO'
import { mapPokemon } from '../../../../infrastructure/api/pokeapi/PokemonMapper/PokemonMapper'
import { getPokedex } from './getPokedex'

export const getPokemonDetails = async () => {


  const pokedex=await getPokedex()

  const promises = pokedex.results.map(async pokemonDTO => {
    const response = await fetch(`${BASE_URL}${pokemonDTO.name}`)
    const pokeApiResponse: PokeApiDTO = await response.json()
    const pokemonMapped = mapPokemon(pokeApiResponse)

    return pokemonMapped
  })

  const pokemonArray = await Promise.all(promises)

  return pokemonArray
}

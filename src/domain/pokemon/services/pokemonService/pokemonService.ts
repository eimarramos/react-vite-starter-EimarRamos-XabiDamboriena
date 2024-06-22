import { BASE_URL } from '../../../../config/config'
import { PaginationResponse } from '../../../../types/PaginationResponse'
import { PokeApiDTO } from '../../../../types/PokeApiDTO'
import { mapPokemon } from '../../../../utils/PokemonMapper/PokemonMapper'

export const pokemonService = async () => {
  const data = await fetch(`${BASE_URL}?limit=${150}&offset=0`)
  const paginationResponse: PaginationResponse = await data.json()

  const promises = paginationResponse.results.map(async pokemonDTO => {
    const response = await fetch(`${BASE_URL}${pokemonDTO.name}`)
    const pokeApiResponse: PokeApiDTO = await response.json()
    const pokemonMapped = mapPokemon(pokeApiResponse)

    return pokemonMapped
  })

  const pokemonArray = await Promise.all(promises)

  return pokemonArray
}

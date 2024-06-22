import { BASE_URL } from '../../../../../config/config'
import { PokeApiDTO } from '../../types/PokeApiDTO'
import { mapPokemon } from '../../PokemonMapper/PokemonMapper'
import { getPokedex } from './getPokedex'

export const getPokemonDetails = async () => {
  const pokedex = await getPokedex()

  const promises = pokedex.results.map(async pokemonDTO => {
    const response = await fetch(`${BASE_URL}${pokemonDTO.name}`)
    const pokeApiResponse: PokeApiDTO = await response.json()
    const pokemonMapped = mapPokemon(pokeApiResponse)

    return pokemonMapped
  })

  const pokemonArray = await Promise.all(promises)

  return pokemonArray
}

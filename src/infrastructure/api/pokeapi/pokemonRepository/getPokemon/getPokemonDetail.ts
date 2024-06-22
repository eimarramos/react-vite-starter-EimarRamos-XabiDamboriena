import { BASE_URL } from '../../../../../config/config'
import { PokeApiDTO } from '../../types/PokeApiDTO'
import { mapPokemon } from '../../PokemonMapper/PokemonMapper'
import { getPokedex } from './getPokedex'

export const getPokemonDetails = async (pokemonName:string) => {

    const response = await fetch(`${BASE_URL}${pokemonName}`)
    const pokeApiResponse: PokeApiDTO = await response.json()
    const pokemonMapped = mapPokemon(pokeApiResponse)

   
  return pokemonMapped
}

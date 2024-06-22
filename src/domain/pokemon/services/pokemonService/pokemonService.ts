import { getPokemonDetails } from '../../../../infrastructure/api/pokeapi/pokemonRepository/getPokemon/getPokemonDetail'
import { pokeApiRepository } from '../../../../infrastructure/api/pokeapi/pokemonRepository/pokeApiRepository'

export const pokemonService = async () => {
  const pokemonsDetails = pokeApiRepository()
  return pokemonsDetails
}

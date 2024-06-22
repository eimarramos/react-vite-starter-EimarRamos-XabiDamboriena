import { getPokemonDetails } from '../../../../infrastructure/api/pokeapi/pokemonRepository/getPokemon/getPokemonDetail'

export const pokemonService = async () => {
  const pokemonsDetails = getPokemonDetails()
  return pokemonsDetails
}

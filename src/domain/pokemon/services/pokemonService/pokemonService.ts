import { getPokemonDetails } from '../../../../infrastructure/api/pokeapi/getPokemon/getPokemonDetail'

export const pokemonService = async () => {
  const pokemonsDetails = getPokemonDetails()
  return pokemonsDetails
}

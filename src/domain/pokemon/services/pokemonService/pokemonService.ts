import { BASE_URL } from '../../../../config/config'
import { PaginationResponse } from '../../../../types/PaginationResponse'
import { PokeApiDTO } from '../../../../infrastructure/api/pokeapi/types/PokeApiDTO'
import { mapPokemon } from '../../../../infrastructure/api/pokeapi/PokemonMapper/PokemonMapper'
import { getPokemonDetails } from '../../../../infrastructure/api/pokeapi/getPokemon/getPokemonDetail'

export const pokemonService = async () => {
  const pokemonsDetails = getPokemonDetails()
  return pokemonsDetails
}

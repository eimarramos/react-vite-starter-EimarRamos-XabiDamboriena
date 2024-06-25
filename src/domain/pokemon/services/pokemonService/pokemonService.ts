import { PokemonRepository, pokemonApiRepository } from '../../../../infrastructure/api/pokeapi/pokemonRepository/pokeApiRepository'

let pokemonRepo: PokemonRepository

const init = (pokemonRepository: PokemonRepository) => {
  pokemonRepo = pokemonRepository
}

const getPokemons = async () => {
  const pokemonsDetails = pokemonRepo.getPokemons()
  return pokemonsDetails
}

export const pokemonService = {
  init,
  getPokemons
}

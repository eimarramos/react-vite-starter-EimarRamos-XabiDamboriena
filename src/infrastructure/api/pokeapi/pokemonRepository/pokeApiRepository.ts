import { Pokemon } from '../types/Pokemon'
import { getPokedex } from './getPokemon/getPokedex'
import { getPokemonDetails } from './getPokemon/getPokemonDetail'

const getPokemons = async () => {
  const pokedex = await getPokedex()

  const promises = pokedex.results.map(async pokemonDTO => {
    return getPokemonDetails(pokemonDTO.name)
  })

  const pokemonArray = await Promise.all(promises)

  return pokemonArray
}

export type PokemonRepository = {
  getPokemons: () => Promise<Pokemon[]>
}

export const pokemonApiRepository: PokemonRepository = {
  getPokemons
}

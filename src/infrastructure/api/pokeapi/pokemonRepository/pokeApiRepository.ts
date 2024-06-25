import { PokemonRepository } from '../../../../domain/pokemon/services/interfaces/PokemonRepository'
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

export const pokemonApiRepository: PokemonRepository = {
  getPokemons,
}

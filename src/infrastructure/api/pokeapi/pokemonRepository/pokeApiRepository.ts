import { getPokedex } from './getPokemon/getPokedex'
import { getPokemonDetails } from './getPokemon/getPokemonDetail'

export const pokeApiRepository = async () => {
  const pokedex = await getPokedex()

  const promises = pokedex.results.map(async pokemonDTO => {
    return getPokemonDetails(pokemonDTO.name)
  })

  const pokemonArray = await Promise.all(promises)

  return pokemonArray
}

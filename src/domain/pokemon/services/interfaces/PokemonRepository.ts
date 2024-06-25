import { Pokemon } from '../../../../infrastructure/api/pokeapi/types/Pokemon'

export type PokemonRepository = {
  getPokemons: () => Promise<Pokemon[]>
}

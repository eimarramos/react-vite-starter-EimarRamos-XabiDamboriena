import { Pokemon } from './Pokemon'

export type PokemonRepository = {
  getPokemons: () => Promise<Pokemon[]>
}

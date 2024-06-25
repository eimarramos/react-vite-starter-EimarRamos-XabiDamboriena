import { Pokemon } from '../../domain/pokemon/model/Pokemon'

export type PokemonRepository = {
  getPokemons: () => Promise<Pokemon[]>
}

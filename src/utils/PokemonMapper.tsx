import { PokeApiResponse } from '../models/PokeApiResponse'
import { Pokemon } from '../models/Pokemon'

export const mapPokemon = (data: PokeApiResponse): Pokemon => {
  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    image: data.sprites.other.dream_world.front_default,
    stats: [],
    types: data.types
  }
}

import { PokeApiResponse } from '../models/PokeApiResponse'
import { Pokemon } from '../models/Pokemon'

export const mapPokemon = (data: PokeApiResponse): Pokemon => {
  const StatNaming: Record<string, string> = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    "special-attack": 'SAT',
    "special-defense": 'SDF',
    speed: 'SPD'
  }

  const NormalizeStatName = (name : string) => {
    return StatNaming[name]
  }

  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    image: data.sprites.other.dream_world.front_default,
    stats: data.stats.map(stat => {
      return {
        name: NormalizeStatName(stat.stat.name),
        value: stat.base_stat,
      }
    }),
    types: data.types.map(type => {
      return type.type.name
    }),
  }
}

import { Type } from "./Pokemon"

export type PokeApiResponse = {
  id: number
  name: string
  weight: number
  height: number
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
  types: Type[]
}
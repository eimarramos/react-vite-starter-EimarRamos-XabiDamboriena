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

export type Type = {
  name: string
  url: string
}

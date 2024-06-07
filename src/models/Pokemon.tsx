import { Stat } from './Stat'

export type Pokemon = {
  id: number
  name: string
  image: string
  weight: number
  height: number
  types: Type[]
  stats: Stat[]
}

export type Type = {
  type: {
    name: string
    url: string
  }
}

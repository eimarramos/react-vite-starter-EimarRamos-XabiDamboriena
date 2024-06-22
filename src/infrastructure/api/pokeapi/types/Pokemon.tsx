import { Stat } from './Stat'

export type Pokemon = {
  id: number
  name: string
  image: string
  weight: number
  height: number
  types: string[]
  stats: Stat[]
}

import { Stat } from "./Stat";

export type Pokemon = {
    id: number;
    name: string;
    types: string[];
    weight: number;
    height: number;
    Stats: Stat[]
}
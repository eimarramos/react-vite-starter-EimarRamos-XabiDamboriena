/*
import { useEffect, useState } from 'react'
import { BASE_URL } from '../config/config'
import { Pokemon } from '../models/Pokemon';


export const GetPokemon = (name: string) => {
    const [data, setData] = useState<Pokemon>();

  useEffect(() => {
    fetch(`${BASE_URL}${name}`)
    .then((response) => {
        response.json();
    })
    .then((data) => {
        setData(data)
    })
  })

  return {data}
}
*/
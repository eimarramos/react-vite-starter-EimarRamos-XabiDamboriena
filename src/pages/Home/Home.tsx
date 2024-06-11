import { useState } from 'react'
import { useGetPokemons } from '../../hooks/useFetchPokemons'
import { Pokemon } from '../../models/Pokemon'
import { ListComponent } from './components/List/List'
import { SearchComponent } from './components/SearchBar/SearchBar'

export const HomeComponent = () => {
  const { pokemons } = useGetPokemons()
  const [filterText, setfilterText] = useState<string>('')

  const filteredPokemons = (): Pokemon[] => {
    return pokemons.filter(pokemon =>
      pokemon.name.includes(filterText.toLocaleLowerCase()),
    )
  }

  const filterPokemons = (e: React.FormEvent<HTMLInputElement>) => {
    setfilterText(e.currentTarget.value)
  }

  return (
    <>
      <SearchComponent filterPokemons={filterPokemons}></SearchComponent>
      {pokemons && (
        <ListComponent pokemons={filteredPokemons()}></ListComponent>
      )}
    </>
  )
}

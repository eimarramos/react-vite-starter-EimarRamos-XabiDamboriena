import { useState } from 'react'
import { useGetPokemons } from '../../hooks/useFetchPokemons'
import { ListComponent } from './components/List/List'
import { SearchComponent } from './components/SearchBar/SearchBar'

export const HomeComponent = () => {
  const { pokemons, isLoading } = useGetPokemons()
  
  const [filterText, setfilterText] = useState<string>('')

  const filterPokemons = (e: React.FormEvent<HTMLInputElement>) => {
    setfilterText(e.currentTarget.value)
  }

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(filterText.toLowerCase()),
  )
  
  return (
    <>
      <SearchComponent filterPokemons={filterPokemons}></SearchComponent>
      <ListComponent pokemons={filteredPokemons}></ListComponent>
    </>
  )
}

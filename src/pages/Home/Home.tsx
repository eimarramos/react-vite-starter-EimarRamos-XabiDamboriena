import { useState } from 'react'
import { useGetPokemons } from '../../hooks/useFetchPokemons'
import { ListComponent } from './components/List/List'
import { SearchComponent } from './components/SearchBar/SearchBar'
import { LoadingItemComponent } from './components/LoadingItem/LoadingItem'
import { ErrorComponent } from './components/Error/Error'
import { EmptyComponent } from './components/Empty/Empty'

export const HomeComponent = () => {
  const numberOfPokemons = 150
  const { pokemons, isLoading, error } = useGetPokemons(numberOfPokemons)
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

      {error && <ErrorComponent></ErrorComponent>}

      {filterPokemons.length !== 0 && (
        <EmptyComponent />
      )}

      <ListComponent pokemons={filteredPokemons}>
        {isLoading &&
          Array.from({ length: numberOfPokemons }, (_, index) => (
            <LoadingItemComponent key={index} />
          ))}
      </ListComponent>
    </>
  )
}

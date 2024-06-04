import { Pokemon } from '../../models/Pokemon'
import { ListItemComponent } from './components/ListItem/ListItem'
import { SearchComponent } from './components/SearchBar/SearchBar'

export const HomeComponent = () => {
  const pokemon: Pokemon =  {
    id: 1,
    name: 'Bulbasaur',
    image: '',
    weight: 50,
    height: 50,
    Stats: []
  }
  return (
    <>
    <SearchComponent></SearchComponent>
    {pokemon && <ListItemComponent pokemon={pokemon}></ListItemComponent>}
    </>
  )
}

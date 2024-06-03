import { Pokemon } from '../../models/Pokemon'
import { GetPokemon } from '../../services/PokemonService'
import { ListItemComponent } from './components/ListItem/ListItem'

export const HomeComponent = () => {
  const pokemon: Pokemon | undefined = GetPokemon('charmeleon').data
  return (
    <>{pokemon && <ListItemComponent pokemon={pokemon}></ListItemComponent>}</>
  )
}

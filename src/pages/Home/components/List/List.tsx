import style from './List.module.css'
import { ListItemComponent } from '../ListItem/ListItem'
import { Pokemon } from '../../../../models/Pokemon'
import { LoadingItemComponent } from '../LoadingItem/LoadingItem'

type ListProps = {
  pokemons: Pokemon[]
}

export const ListComponent: React.FC<ListProps> = ({ pokemons }) => {
  return (
    <section className={style.list_container}>
      {pokemons.map(pokemon => (
        <ListItemComponent key={pokemon.id} pokemon={pokemon}></ListItemComponent>
      ))}
    </section>
  )
}

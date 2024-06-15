import style from './List.module.css'
import { ListItemComponent } from '../ListItem/ListItem'
import { Pokemon } from '../../../../types/Pokemon'
import { ReactNode } from 'react';

type ListProps = {
  pokemons: Pokemon[]
  children: ReactNode
}

export const ListComponent: React.FC<ListProps> = ({ pokemons, children }) => {
  return (
    <section className={style.list_container}>
      {children}
      {pokemons.map(pokemon => (
        <ListItemComponent key={pokemon.id} pokemon={pokemon}></ListItemComponent>
      ))}
    </section>
  )
}

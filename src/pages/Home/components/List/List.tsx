import style from './List.module.css'
import { ListItemComponent } from '../ListItem/ListItem'
import { useGetPokemons } from '../../../../hooks/useFetchPokemons'

export const ListComponent = () => {
  const pokemons = useGetPokemons()
  return (
    <section className={style.list_container}>
      {pokemons &&
        pokemons.map(pokemon => (
          <ListItemComponent pokemon={pokemon}></ListItemComponent>
        ))}
    </section>
  )
}

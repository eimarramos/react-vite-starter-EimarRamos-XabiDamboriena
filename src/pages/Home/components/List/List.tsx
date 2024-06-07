import style from './List.module.css'
import { ListItemComponent } from "../ListItem/ListItem"
import { useGetPokemon } from '../../../../services/PokemonService'

export const ListComponent = () => {
    const  { data } =  useGetPokemon('groudon');

    return(
        <section className={style.list_container}>
             {data && <ListItemComponent pokemon={data}></ListItemComponent>}
        </section>
    )
}
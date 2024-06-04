import style from './List.module.css'
import { Pokemon } from "../../../../models/Pokemon"
import { ListItemComponent } from "../ListItem/ListItem"
import { GetPokemon } from '../../../../services/PokemonService'

export const ListComponent = () => {
    const pokemon: Pokemon | undefined =  GetPokemon('pikachu').data

    return(
        <section className={style.list_container}>
             {pokemon && <ListItemComponent pokemon={pokemon}></ListItemComponent>}
        </section>
    )
}
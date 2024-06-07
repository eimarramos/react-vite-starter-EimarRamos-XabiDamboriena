import style from './ListItem.module.css'
import bulbasaur from '../../../../assets/images/bulbasaur.png'
import { StatComponent } from '../Stat/Stat'
import { Pokemon } from '../../../../models/Pokemon'

type ListItemProps = {
  pokemon: Pokemon
}

export const ListItemComponent: React.FC<ListItemProps> = ({ pokemon }) => {

  const colors: Record<string, string> = {
    electric: style.fire
  }
  return (
    <article className={ `${style.pokemon_card} ${colors[pokemon.types[0]]}`}>
      <header className={style.card_header}>
        <h3 className={style.card_header__name}>{pokemon.name}</h3>
        <p className={style.card_header_id}>#{pokemon.id}</p>
      </header>
      <section className={style.card_body}>
        <div className={style.card_body__image_container}>
          <img className={style.card_body__image} src={pokemon.image} alt="" />
        </div>
        <div className={style.card_body__types}>
          <div
            className={`${style.card_body_pills} ${style['card_body_pills--grass']}`}
          >
            <img
              src={bulbasaur}
              alt=""
              className={style.card_body__pills_icon}
            />
            <p>Grass</p>
          </div>
          <div
            className={`${style.card_body_pills} ${style['card_body_pills--poison']}`}
          >
            <img
              src={bulbasaur}
              alt=""
              className={style.card_body__pills_icon}
            />
            <p>Poison</p>
          </div>
        </div>
        <div className={style.card_body__measures_container}>
          <div className={style.card_body_measures}>
            <img
              src={bulbasaur}
              alt=""
              className={style.card_body_measures__icon}
            />
            <p>{pokemon.weight} kg</p>
          </div>
          <hr className={style.card_body_measures__separator} />
          <div className={style.card_body_measures}>
            <img
              src={bulbasaur}
              alt=""
              className={style.card_body_measures__icon}
            />
            <p>{pokemon.height} m</p>
          </div>
        </div>
        <div className={style.card_body__stats}>
          <StatComponent value={35} name="ATQ"></StatComponent>
          <StatComponent value={35} name="ATQ"></StatComponent>
          <StatComponent value={35} name="ATQ"></StatComponent>
          <StatComponent value={35} name="ATQ"></StatComponent>
          <StatComponent value={35} name="ATQ"></StatComponent>
          <StatComponent value={35} name="ATQ"></StatComponent>
        </div>
      </section>
    </article>
  )
}

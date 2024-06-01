import style from './ListItem.module.css'
import bulbasaur from '../../../../assets/images/bulbasaur.png'
import { StatComponent } from '../Stat/Stat'

export const ListItemComponent = () => (
  <article className={style.pokemon_card}>
    <header className={style.card_header}>
      <h3 className={style.card_header__name}>Bulbasaur</h3>
      <p className={style.card_header_number}>#001</p>
    </header>
    <section className={style.card_body}>
      <div className={style.card_body__image_container}>
        <img className={style.card_body__image} src={bulbasaur} alt="" />
      </div>
      <div className={style.card_body__types}>
        <div
          className={`${style.card_body_pills} ${style['card_body_pills--grass']}`}
        >
          <img src={bulbasaur} alt="" className={style.card_body__pills_icon} />
          <p>Grass</p>
        </div>
        <div
          className={`${style.card_body_pills} ${style['card_body_pills--poison']}`}
        >
          <img src={bulbasaur} alt="" className={style.card_body__pills_icon} />
          <p>Poison</p>
        </div>
      </div>
      <div className={style.card_body__measures_container}>
        <div
          className={style.card_body_measures}
        >
          <img src={bulbasaur} alt="" className={style.card_body_measures__icon} />
          <p>6.9 kg</p>
        </div>
        <hr className={style.card_body_measures__separator} />
        <div
          className={style.card_body_measures}
        >
          <img src={bulbasaur} alt="" className={style.card_body_measures__icon} />
          <p>0.7 m</p>
        </div>
      </div>
      <div className={style.card_body__stats}>
        <StatComponent value={35} name='ATQ'></StatComponent>
        <StatComponent value={35} name='ATQ'></StatComponent>
        <StatComponent value={35} name='ATQ'></StatComponent>
        <StatComponent value={35} name='ATQ'></StatComponent>
        <StatComponent value={35} name='ATQ'></StatComponent>
        <StatComponent value={35} name='ATQ'></StatComponent>
      </div>
    </section>
  </article>
)

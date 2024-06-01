import style from './ListItem.module.css'
import bulbasaur from '../../../../assets/images/bulbasaur.png'

export const ListItemComponent = () => (
    <article className={style.pokemon_card}>
        <header className={style.card_header}>
            <h3 className={style.card_header__name}>Bulbasaur</h3>
            <p className={style.card_header_number}>#001</p>
        </header>
        <section className={style.card_body}>
            <img className={style.card_body__photo} src={bulbasaur} alt="" />
            <div className={style.card_body__types}>
                <p>Grass</p>
                <p>Poison</p>
            </div>
            <div className={style.card_body__measures}>
                <p> 6.9 Kg</p>
                <p> 0.7 m</p>
            </div>
            <div className={style.card_body__stats}> 
                <p>HP</p>
                <p>045</p>
                <div>
                    <span></span>
                </div>
            </div>
        </section>     
    </article>
)
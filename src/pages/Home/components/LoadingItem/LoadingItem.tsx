import { WhitePokeball } from '../../../../assets/svg/WhitePokeball'
import style from './LoadingItem.module.css'

export const LoadingItemComponent = () => {
  return (
    <article className={style.pokemon_card}>
      <WhitePokeball></WhitePokeball>
    </article>
  )
}

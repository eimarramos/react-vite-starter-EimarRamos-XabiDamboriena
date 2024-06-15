import { AlertIcon } from '../../../../assets/svg/AlertIcon'
import style from './Error.module.css'

export const ErrorComponent = () => (
  <article className={style.error_container}>
    <AlertIcon />
    <p>
      An error ocurred getting Pokémons <br /> Please, try it later
    </p>
  </article>
)

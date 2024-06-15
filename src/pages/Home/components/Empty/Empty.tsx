import { EmptyIcon } from '../../../../assets/svg/EmptyIcon'
import style from './Empty.module.css'

export const EmptyComponent = () => (
  <article className={style.empty_container}>
    <EmptyIcon />
    <p>
      There is no results for "nonexistent"
    </p>
  </article>
)

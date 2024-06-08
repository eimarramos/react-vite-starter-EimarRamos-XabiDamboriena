import { colors } from '../../../../utils/Colors/ColorsMapper'
import style from './Type.module.css'

type TypeProps = {
    name: string
}

export const TypeComponent: React.FC<TypeProps> = ({name}) => {
  return (
    <div
      className={`${style.card_body_pills} ${colors[name]}`}
    >
      <img src={name} alt="" className={style.card_body__pills_icon} />
      <p>{name}</p>
    </div>
  )
}

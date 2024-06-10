import { colors } from '../../../../utils/Colors/ColorsMapper'
import { svgDictionary } from '../../../../utils/SvgDictionary/SvgDictionary'
import style from './Type.module.css'

type TypeProps = {
  name: string
}

export const TypeComponent: React.FC<TypeProps> = ({ name }) => {
  return (
    <div className={`${style.card_body_pills} ${colors[name]}`}>
      {svgDictionary(name)}
      <p>{name}</p>
    </div>
  )
}

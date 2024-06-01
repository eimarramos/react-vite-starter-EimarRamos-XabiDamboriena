import style from './Stat.module.css'

type StatProps = {
    name: string
    value: number
}

export const StatComponent: React.FC<StatProps> = ({name, value}) =>{

    return(
        <div className={style.stat_container}>
            <p className={style.stat_container__stat_name}>{name}</p>
            <p className={style.stat_container__stat_value}>{value}</p>
            <div className={style.bar_progress_container}>
                <div className={style.bar_progress_container__bar_progress}></div>
            </div>
        </div>
    )
}
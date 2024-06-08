import style from './SearchBar.module.css'
import searchIcon from '../../../../assets/images/Search icon.png'

export const SearchComponent = () => {
  return (
      <label className={style.search_bar}>
        <img
          src={searchIcon}
          alt="Search icon"
          className={style.search_bar__icon}
        />
        <input
          type="text"
          placeholder="Search a Pokémon"
          name="search"
          className={style.search_bar__input}
        />
      </label>
  )
}
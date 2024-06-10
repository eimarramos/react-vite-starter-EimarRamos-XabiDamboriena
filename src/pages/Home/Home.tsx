import { ListComponent } from './components/List/List'
import { SearchComponent } from './components/SearchBar/SearchBar'

export const HomeComponent = () => {
  return (
    <>
      <SearchComponent></SearchComponent>
      <ListComponent></ListComponent>
    </>
  )
}

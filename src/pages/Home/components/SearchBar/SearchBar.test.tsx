import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SearchComponent } from './SearchBar'

test('El componente deberia rederizarse mostrando sus datos', () => {
  const filterPokemons = (event: React.FormEvent<HTMLInputElement>) => {
    return event.currentTarget.value
  }

  render(<SearchComponent filterPokemons={filterPokemons} />)

  const searchBar = screen.getByTestId('searchLabel')

  expect(searchBar, 'El nombre deberia mostrarse').toBeInTheDocument()
})

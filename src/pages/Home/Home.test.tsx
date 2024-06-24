import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HomeComponent } from './Home'
import { Pokemon } from '../../types/Pokemon'

const pokemons: Pokemon[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    image: '2',
    weight: 3,
    height: 4,
    types: ['Grass', 'Poison'],
    stats: [
      { name: 'DEF', value: 30 },
      { name: 'ATQ', value: 60 },
    ],
  },
]

// vitest.mock('../../hooks/useFetchPokemons', () => ({
//   useGetPokemons:() =>({
//     pokemons: [], isLoading: true, error: false
//   })
// }))

const mockUseGetPokemons = vitest.fn()
vitest.mock('../../hooks/useFetchPokemons', () => ({
  useGetPokemons: () => mockUseGetPokemons(),
}))

describe('HomeComponent', () => {
  test('El mensaje de Error deberia mostrarse', () => {
    // vitest.spyOn(allUseGetPokemons, 'useGetPokemons').mockReturnValue({
    //   pokemons: [], isLoading: false, error: true
    // })

    mockUseGetPokemons.mockReturnValue({
      pokemons: [],
      isLoading: false,
      error: true,
    })

    render(<HomeComponent />)

    expect(screen.getByTestId('errorComponente')).toBeVisible()
  })

  test('El mensaje de Error no deberia mostrarse', () => {
    mockUseGetPokemons.mockReturnValue({
      pokemons: [],
      isLoading: false,
      error: false,
    })

    render(<HomeComponent />)

    expect(screen.queryByTestId('errorComponente')).not.toBeInTheDocument()
  })

  test('El componentes IsLoading deberia mostrarse', () => {
    mockUseGetPokemons.mockReturnValue({
      pokemons: pokemons,
      isLoading: true,
      error: false,
    })

    render(<HomeComponent />)

    expect(screen.getByTestId('componenteLoading')).toBeInTheDocument()
  })

  test('El pokemon deberia mostrarse', () => {
    mockUseGetPokemons.mockReturnValue({
      pokemons: pokemons,
      isLoading: false,
      error: false,
    })

    render(<HomeComponent />)

    expect(screen.getByText('#001')).toBeInTheDocument()
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument()
    expect(screen.getByText('3 kg')).toBeInTheDocument()
    expect(screen.getByText('4 m')).toBeInTheDocument()
    expect(screen.getByText('Grass')).toBeInTheDocument()
    expect(screen.getByText('Poison')).toBeInTheDocument()
    expect(screen.getByText('DEF')).toBeInTheDocument()
    expect(screen.getByText('ATQ')).toBeInTheDocument()
    expect(screen.getByText('030')).toBeInTheDocument()
    expect(screen.getByText('060')).toBeInTheDocument()
  })
})

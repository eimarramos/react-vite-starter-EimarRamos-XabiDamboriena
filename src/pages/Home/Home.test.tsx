import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HomeComponent } from './Home'
import { Pokemon } from '../../types/Pokemon'
import * as allUseGetPokemons from '../../hooks/useFetchPokemons'

const pokemons: Pokemon[] = [
  {
    id: 123,
    name: 'Bulbasaur',
    image: '123',
    weight: 123,
    height: 123,
    types: ['fire'],
    stats: [{ name: 'DEF', value: 30 }],
  },
  {
    id: 123,
    name: 'Charizard',
    image: '123',
    weight: 123,
    height: 123,
    types: ['fire'],
    stats: [{ name: 'DEF', value: 30 }],
  },
  {
    id: 123,
    name: 'Lucario',
    image: '123',
    weight: 123,
    height: 123,
    types: ['fire'],
    stats: [{ name: 'DEF', value: 30 }],
  },
  {
    id: 123,
    name: 'Pikachu',
    image: '123',
    weight: 123,
    height: 123,
    types: ['fire'],
    stats: [{ name: 'DEF', value: 30 }],
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
  test('El componente deberia rederizarse mostrando sus datos', () => {
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
})

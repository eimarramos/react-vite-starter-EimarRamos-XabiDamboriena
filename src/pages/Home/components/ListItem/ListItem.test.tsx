import { Pokemon } from '../../../../types/Pokemon'
import { ListItemComponent } from './ListItem'
import { screen } from '@testing-library/react'
import { render } from '../../../../utils/TestUtils/TestUtils'
import '@testing-library/jest-dom'

describe('ListItem', () => {
  test('Deberia mostrar sus  propiedades', () => {
    const pokemon: Pokemon = {
      id: 1,
      height: 60,
      image: '',
      name: 'Pikachu',
      stats: [{ name: 'ATQ', value: 50 }],
      types: ['electric'],
      weight: 80,
    }

    render(<ListItemComponent pokemon={pokemon} />)

    const pokemonName = screen.getByText('Pikachu')
    const pokemonWeight = screen.getByText('80 kg')
    const pokemonHeight = screen.getByText('60 m')

    expect(pokemonName, 'El nombre deberia mostrarse').toBeInTheDocument()
    expect(pokemonWeight, 'El peso deberia mostrarse').toBeInTheDocument()
    expect(pokemonHeight, 'La altura deberia mostrarse').toBeInTheDocument()
  })

  test('Deberia tener los estilos correspondientes', () => {
    const pokemon: Pokemon = {
      id: 1,
      height: 60,
      image: '',
      name: 'Charmander',
      stats: [{ name: 'ATQ', value: 50 }],
      types: ['fire'],
      weight: 80,
    }

    render(<ListItemComponent pokemon={pokemon} />)

    const card = screen.getByTestId('pokemonCard')

    expect(card, 'Deberia tener la clase fire').toHaveClass('_fire_511e4f')
  })
})

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ListComponent } from './List'
import { Pokemon } from '../../../../infrastructure/api/pokeapi/types/Pokemon'

test('El componente deberia rederizarse mostrando sus datos', () => {
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

  const { container } = render(
    <ListComponent pokemons={pokemons} children={undefined} />,
  )

  const pokemonElements = pokemons.map(pokemon =>
    screen.getByText(pokemon.name),
  )

  expect(container, 'El componente deberia renderizarse').toBeInTheDocument()
  expect(pokemonElements, 'Los pokemons deberian rederizarse').toHaveLength(4)
})

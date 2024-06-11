import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { StatComponent } from './Stat'

test('El componente deberia rederizarse mostrando sus datos', () => {
  render(<StatComponent key={1} name="DEF" value={35} />)

  const statName = screen.getByText('DEF')
  const statValue = screen.getByText('035')

  expect(statName, 'El nombre deberia mostrarse').toBeInTheDocument()
  expect(statValue, 'El valor de la stat deberia mostrarse formateado con 3 digitos').toBeInTheDocument()
})

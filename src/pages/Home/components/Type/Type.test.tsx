import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TypeComponent } from './Type'

test('El componente deberia rederizarse mostrando sus datos', () => {
  render(<TypeComponent name="fire" />)

  const typeName = screen.getByText('Fire')

  expect(typeName, 'El nombre deberia mostrarse formateado').toBeInTheDocument()
})

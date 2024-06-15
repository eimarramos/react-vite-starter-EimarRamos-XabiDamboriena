import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TypeComponent } from './Type'

test('El componente deberia rederizarse mostrando sus datos', () => {
  render(<TypeComponent name="fire" />)

  const typeName = screen.getByText('Fire')
  const container = screen.getByTestId('pill')

  expect(container, "Deberia ser de coclor rojo").toBeInTheDocument()
  expect(typeName, 'Deberia apareceer en el documento').toBeInTheDocument()
})

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ErrorComponent } from './Error'

test('El componente deberia rederizarse mostrando sus datos', () => {
  const { container } = render(<ErrorComponent />)

  expect(container, 'El componente deberia renderizarse').toBeInTheDocument()
})

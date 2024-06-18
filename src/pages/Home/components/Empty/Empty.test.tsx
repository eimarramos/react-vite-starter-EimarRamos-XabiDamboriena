import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { EmptyComponent } from './Empty'

test('El componente deberia rederizarse mostrando sus datos', () => {
  const { container } = render(<EmptyComponent />)

  expect(container, 'El componente deberia renderizarse').toBeInTheDocument()
})

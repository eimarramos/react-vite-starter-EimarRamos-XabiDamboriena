import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HomeComponent } from './Home'

test('El componente deberia rederizarse mostrando sus datos', () => {
  const { container } = render(<HomeComponent />)

  expect(container, 'El componente deberia renderizarse').toBeInTheDocument()
})

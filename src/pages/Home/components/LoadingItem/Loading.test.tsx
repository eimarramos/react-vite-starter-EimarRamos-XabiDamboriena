import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { LoadingItemComponent } from './LoadingItem'

test('El componente deberia rederizarse mostrando sus datos', () => {
  const { container } = render(<LoadingItemComponent />)

  expect(container, 'El componente deberia renderizarse').toBeInTheDocument()
})

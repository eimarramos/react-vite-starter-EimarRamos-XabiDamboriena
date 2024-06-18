import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import './../Colors/ColorsMapper.module.css'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { ...options })

export * from '@testing-library/react'
export { customRender as render }

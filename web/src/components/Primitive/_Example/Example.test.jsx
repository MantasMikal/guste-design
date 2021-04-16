import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import Example from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Example', () => {
  validateRequiredProps(Example, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<Example {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<Example {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})

// expect(container.firstChild).toHaveClass('notice')

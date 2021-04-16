import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import Floater from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Floater', function () {
  validateRequiredProps(Floater, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByText } = render(<Floater {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional className when `align` prop passed', function () {
    const { container } = render(<Floater {...requiredProps()} align="left" />)
    expect(container.firstChild).toHaveClass('left')
  })

  test('should output additional className when `size` prop passed', function () {
    const { container } = render(<Floater {...requiredProps()} size="medium" />)
    expect(container.firstChild).toHaveClass('medium')
  })
})

import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import ResponsiveMedia from './'

const requiredProps = () => ({
  children: <img src="https://img.clock.co.uk/10" alt="" />,
  ratio: 1
})

describe('Component: ResponsiveMedia', function () {
  validateRequiredProps(ResponsiveMedia, requiredProps())

  test('should output the expected markup with default props', function () {
    const { container } = render(<ResponsiveMedia {...requiredProps()} />)
    expect(container.firstChild).toHaveStyle({ paddingBottom: '100%' })
  })

  test('should handle a fractional ratio', function () {
    const { container } = render(
      <ResponsiveMedia {...requiredProps()} ratio={9 / 16} />
    )
    expect(container.firstChild).toHaveStyle({ paddingBottom: '56.25%' })
  })

  test('should round ratio percentage to 4 decimal places', function () {
    const { container } = render(
      <ResponsiveMedia {...requiredProps()} ratio={321 / 111} />
    )
    expect(container.firstChild).toHaveStyle({ paddingBottom: '289.1892%' })
  })
})

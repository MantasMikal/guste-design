import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import List from '.'

const requiredProps = () => ({
  children: [<li key={1}>Item 1</li>, <li key={2}>Item 2</li>]
})

describe('Component: List', function () {
  validateRequiredProps(List, requiredProps())

  test('should output the expected markup with default props', function () {
    const { container, getByText } = render(<List {...requiredProps()} />)
    expect(container.querySelector('ul')).toBeTruthy()
    expect(getByText('Item 1')).toBeTruthy()
    expect(getByText('Item 2')).toBeTruthy()
  })

  test('should output additional className when `inline` prop passed', function () {
    const { container } = render(<List {...requiredProps()} inline />)
    expect(container.firstChild).toHaveClass('inline')
  })

  test('should output additional className when `unstyled` prop passed', function () {
    const { container } = render(<List {...requiredProps()} unstyled />)
    expect(container.firstChild).toHaveClass('unstyled')
  })

  test('should output as `ol` when `ordered` prop passed', function () {
    const { container } = render(<List {...requiredProps()} ordered />)
    expect(container.querySelector('ol')).toBeTruthy()
  })
})

import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import Type from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Type', function () {
  validateRequiredProps(Type, requiredProps())

  test('should output the expected markup with default props', function () {
    const { container, getByText } = render(<Type {...requiredProps()} />)
    expect(container.firstChild).toHaveClass('base')
    expect(getByText('Default content')).toBeTruthy()
    expect(container.querySelector('div')).toBeTruthy()
  })

  test('should output as expected element when `as` prop passed', function () {
    const { container } = render(<Type {...requiredProps()} as="h1" />)
    expect(container.querySelector('h1')).toBeTruthy()
  })

  test('should output additional className when `size` prop passed', function () {
    const { container } = render(<Type {...requiredProps()} size="title" />)
    expect(container.firstChild).toHaveClass('title')
  })

  test('should output additional className when `tight` prop passed', function () {
    const { container } = render(<Type {...requiredProps()} tight />)
    expect(container.firstChild).toHaveClass('tight')
  })
})

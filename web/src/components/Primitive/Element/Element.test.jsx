import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import Element from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Element', function () {
  validateRequiredProps(Element, requiredProps())

  test('should output the expected markup with default props', function () {
    const { container, getByText } = render(<Element {...requiredProps()} />)
    expect(container.querySelector('div')).toBeTruthy()
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output as specified element if set', function () {
    const { container, getByText } = render(
      <Element {...requiredProps()} as="h1" />
    )
    expect(container.querySelector('h1')).toBeTruthy()
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output all additional props as expected', function () {
    const { container, getByTitle } = render(
      <Element
        {...requiredProps()}
        className="example-class"
        title="Example title"
      />
    )
    expect(container.firstChild).toHaveClass('example-class')
    expect(getByTitle('Example title')).toBeTruthy()
  })
})

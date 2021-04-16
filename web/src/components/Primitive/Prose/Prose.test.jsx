import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import Prose from '.'

const requiredProps = () => ({})

describe('Component: Prose', function () {
  validateRequiredProps(Prose, requiredProps())

  test('should output the expected markup with children', function () {
    const { getByText } = render(
      <Prose>
        <p>Default content</p>
      </Prose>
    )
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output the expected markup with html', function () {
    const { getByText } = render(
      <Prose dangerousHtml="<p>Default content</p>" />
    )
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output nothing without children or html', function () {
    const { container } = render(<Prose />)
    expect(container.firstChild).toBeNull()
  })

  test('should output additional className when `inverse` prop passed', function () {
    const { container } = render(
      <Prose inverse>
        <a href="#example">Default content</a>
      </Prose>
    )
    expect(container.firstChild).toHaveClass('inverse')
  })
})

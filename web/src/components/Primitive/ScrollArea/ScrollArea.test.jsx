import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import ScrollArea from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: ScrollArea', function () {
  validateRequiredProps(ScrollArea, requiredProps())

  test('should output the expected markup with default props', function () {
    const { container, getByText } = render(<ScrollArea {...requiredProps()} />)
    expect(container.firstChild).toHaveClass('vertical')
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output the expected markup `horizontal` axis', function () {
    const { container } = render(<ScrollArea {...requiredProps()} horizontal />)
    expect(container.firstChild).toHaveClass('horizontal')
  })

  test('should output additional className when `hideScrollbar` prop passed', function () {
    const { container } = render(
      <ScrollArea {...requiredProps()} hideScrollbar />
    )
    expect(container.firstChild).toHaveClass('hideScrollbar')
  })
})

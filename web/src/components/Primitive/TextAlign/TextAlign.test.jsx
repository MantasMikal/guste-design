import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import TextAlign from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: TextAlign', function () {
  validateRequiredProps(TextAlign, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByText } = render(<TextAlign {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional className when `left` prop passed', function () {
    const { container } = render(<TextAlign {...requiredProps()} left />)
    expect(container.firstChild).toHaveClass('left')
  })

  test('should output additional className when `right` prop passed', function () {
    const { container } = render(<TextAlign {...requiredProps()} right />)
    expect(container.firstChild).toHaveClass('right')
  })

  test('should output additional className when `center` prop passed', function () {
    const { container } = render(<TextAlign {...requiredProps()} center />)
    expect(container.firstChild).toHaveClass('center')
  })

  test('should output additional className when `justify` prop passed', function () {
    const { container } = render(<TextAlign {...requiredProps()} justify />)
    expect(container.firstChild).toHaveClass('justify')
  })
})

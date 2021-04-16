import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import Spinner from '.'

const requiredProps = () => ({})

describe('Component: Spinner', function () {
  validateRequiredProps(Spinner, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByRole, getByText } = render(<Spinner {...requiredProps()} />)
    expect(getByRole('alert')).toBeTruthy()
    expect(getByText('Loading…')).toBeTruthy()
  })

  test('should output additional className when `paused` prop passed', function () {
    const { container } = render(<Spinner {...requiredProps()} paused />)
    expect(container.firstChild).toHaveClass('paused')
  })

  test('should output additional styles when `revealDelay` prop passed', function () {
    const { container } = render(
      <Spinner {...requiredProps()} revealDelay={1000} />
    )
    expect(container.firstChild).toHaveStyle({ animationDelay: '1000ms' })
  })

  test('should output additional styles when `size` prop passed', function () {
    const { container } = render(<Spinner {...requiredProps()} size={30} />)
    expect(container.firstChild).toHaveStyle({
      height: '30px',
      lineHeight: '30px',
      width: '30px'
    })
  })
})

import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import Container from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Container', function () {
  validateRequiredProps(Container, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByText } = render(<Container {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional className when `center` prop passed', function () {
    const { container } = render(<Container {...requiredProps()} center />)
    expect(container.firstChild).toHaveClass('center')
  })

  test('should output additional className when `gutter` prop passed', function () {
    const { container } = render(<Container {...requiredProps()} gutter />)
    expect(container.firstChild).toHaveClass('gutter')
  })

  test('should output additional className when `size` prop passed', function () {
    const { container } = render(
      <Container {...requiredProps()} size="small" />
    )
    expect(container.firstChild).toHaveClass('small')
  })

  test('should output additional className when `noClearfix` prop passed', function () {
    const { container } = render(<Container {...requiredProps()} noClearfix />)
    expect(container.firstChild).toHaveClass('noClearfix')
  })
})

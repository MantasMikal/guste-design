import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import StatusColor from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: StatusColor', function () {
  validateRequiredProps(StatusColor, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByText } = render(<StatusColor {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional className when `status` prop passed', function () {
    const { container } = render(
      <StatusColor {...requiredProps()} status="notice" />
    )
    expect(container.firstChild).toHaveClass('notice')
  })
})

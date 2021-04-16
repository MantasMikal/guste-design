import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import ButtonStandard from '.'

const requiredProps = () => ({})

const defaultProps = () => ({ children: 'Example content' })

describe('Component: ButtonStandard', function () {
  validateRequiredProps(ButtonStandard, requiredProps())

  test('should output additional className when `disabled` prop passed', function () {
    const { getByRole } = render(
      <ButtonStandard {...requiredProps()} {...defaultProps()} disabled />
    )
    expect(getByRole('button')).toBeDisabled()
    expect(getByRole('button')).toHaveClass('disabled')
  })

  test('should display loading state when `loading` prop passed', function () {
    const { getByText } = render(
      <ButtonStandard {...requiredProps()} {...defaultProps()} loading />
    )
    expect(getByText('Example content')).toBeTruthy()
  })
})

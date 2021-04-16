import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import ButtonBase from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: ButtonBase', function () {
  validateRequiredProps(ButtonBase, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByRole, getByText } = render(<ButtonBase {...requiredProps()} />)
    expect(getByRole('button')).toBeTruthy()
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional styles when `block` prop passed', function () {
    const { getByRole } = render(<ButtonBase {...requiredProps()} block />)
    expect(getByRole('button')).toHaveClass('block')
  })

  test('should output additional styles and attribute when `disabled` prop passed', function () {
    const { getByRole } = render(<ButtonBase {...requiredProps()} disabled />)
    expect(getByRole('button')).toBeDisabled()
    expect(getByRole('button')).toHaveClass('disabled')
  })

  test('should pass additional props to SmartLink', function () {
    const { getByTitle } = render(
      <ButtonBase {...requiredProps()} title="Example Title" />
    )
    expect(getByTitle('Example Title')).toBeTruthy()
  })
})

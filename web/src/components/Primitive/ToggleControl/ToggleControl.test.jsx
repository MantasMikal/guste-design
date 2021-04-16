import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import ToggleControl from '.'

const requiredProps = () => ({ name: 'exampleName', value: 'exampleValue' })

describe('Component: ToggleControl', () => {
  validateRequiredProps(ToggleControl, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByRole } = render(<ToggleControl {...requiredProps()} />)
    expect(getByRole('checkbox')).toBeTruthy()
  })

  test('should output the expected markup with `loading` prop', () => {
    const { getByText } = render(<ToggleControl {...requiredProps()} loading />)
    expect(getByText('Loading…')).toBeTruthy()
  })

  test('should output the expected markup with `disabled` prop', () => {
    const { getByRole } = render(
      <ToggleControl {...requiredProps()} disabled />
    )
    expect(getByRole('checkbox')).toBeDisabled()
  })

  test('should output additional className when `status` prop passed', () => {
    const { container } = render(
      <ToggleControl {...requiredProps()} status="notice" />
    )
    expect(container.firstChild).toHaveClass('notice')
  })

  test('should output the expected markup with custom text labels', () => {
    const { container } = render(
      <ToggleControl
        {...requiredProps()}
        textChecked="On"
        textUnchecked="Off"
      />
    )
    expect(container.querySelector('.ToggleControlFrame')).toHaveAttribute(
      'data-text-checked',
      'On'
    )
    expect(container.querySelector('.ToggleControlFrame')).toHaveAttribute(
      'data-text-unchecked',
      'Off'
    )
  })
})

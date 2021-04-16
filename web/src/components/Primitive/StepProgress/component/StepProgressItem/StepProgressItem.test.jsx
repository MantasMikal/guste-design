import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import StepProgressItem from '.'

const requiredProps = () => ({
  children: 'Default content'
})

describe('Component: StepProgressItem', function () {
  validateRequiredProps(StepProgressItem, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<StepProgressItem {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output the expected class when `complete` prop passed', () => {
    const { getByText } = render(
      <StepProgressItem {...requiredProps()} complete />
    )
    expect(getByText('Default content')).toHaveClass('complete')
  })

  test('should output the expected class when `current` prop passed', () => {
    const { getByText } = render(
      <StepProgressItem {...requiredProps()} current />
    )
    expect(getByText('Default content')).toHaveClass('current')
  })

  test('should output the expected class when `status` prop passed', () => {
    const { getByText } = render(
      <StepProgressItem {...requiredProps()} status="positive" />
    )
    expect(getByText('Default content')).toHaveClass('positive')
  })
})

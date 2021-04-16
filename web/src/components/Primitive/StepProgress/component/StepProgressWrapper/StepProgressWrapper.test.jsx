import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import StepProgressWrapper from '.'
import StepProgress from '../..'

const requiredProps = () => ({
  children: <StepProgress.Item>Default content</StepProgress.Item>
})

describe('Component: StepProgressWrapper', function () {
  validateRequiredProps(StepProgressWrapper, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<StepProgressWrapper {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })
})

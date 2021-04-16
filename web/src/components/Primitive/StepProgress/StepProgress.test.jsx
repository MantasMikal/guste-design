import React from 'react'
import { render } from '@testing-library/react'
import StepProgress from '.'

describe('Component: StepProgress', function () {
  test('should output the expected markup with default props', function () {
    const { getByText } = render(
      <StepProgress>
        <StepProgress.Item>Item one</StepProgress.Item>
        <StepProgress.Item>Item two</StepProgress.Item>
      </StepProgress>
    )
    expect(getByText('Item one')).toBeTruthy()
    expect(getByText('Item two')).toBeTruthy()
  })
})

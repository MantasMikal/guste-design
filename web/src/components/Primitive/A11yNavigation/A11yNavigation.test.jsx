import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import A11yNavigation from '.'

const requiredProps = () => ({
  children: [
    <a key="1" href="#content">
      Jump to main content
    </a>,
    <a key="2" href="#navigation">
      Jump to primary navigation
    </a>
  ]
})

describe('Component: A11yNavigation', () => {
  validateRequiredProps(A11yNavigation, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText, getAllByRole } = render(
      <A11yNavigation {...requiredProps()} />
    )
    expect(getAllByRole('link')).toHaveLength(2)
    expect(getByText('Jump to main content')).toBeTruthy()
    expect(getByText('Jump to primary navigation')).toBeTruthy()
  })
})

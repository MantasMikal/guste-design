import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import Hide from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Hide', () => {
  validateRequiredProps(Hide, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<Hide {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })
})

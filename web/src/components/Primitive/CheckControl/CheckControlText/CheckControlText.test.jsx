import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import CheckControlText from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: CheckControlText', function () {
  validateRequiredProps(CheckControlText, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByText } = render(<CheckControlText {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })
})

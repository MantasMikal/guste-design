import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import VisuallyHidden from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: VisuallyHidden', function () {
  validateRequiredProps(VisuallyHidden, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByText } = render(<VisuallyHidden {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })
})

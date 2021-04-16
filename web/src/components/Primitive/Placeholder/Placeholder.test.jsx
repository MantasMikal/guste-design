import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import Placeholder from '.'

const requiredProps = () => ({})

describe('Component: Placeholder', () => {
  validateRequiredProps(Placeholder, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(
      <Placeholder {...requiredProps()}>Default content</Placeholder>
    )
    expect(getByText('Default content')).toBeTruthy()
  })
})

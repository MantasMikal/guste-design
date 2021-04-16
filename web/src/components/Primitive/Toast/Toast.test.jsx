import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import Toast from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Toast', () => {
  validateRequiredProps(Toast, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<Toast {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<Toast {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})

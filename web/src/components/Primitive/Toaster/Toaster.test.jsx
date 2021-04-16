// import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
// import { render } from '@testing-library/react'
import Toaster from '.'

const requiredProps = () => ({})

describe('Component: Toaster', () => {
  validateRequiredProps(Toaster, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<Toaster {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<Toaster {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})

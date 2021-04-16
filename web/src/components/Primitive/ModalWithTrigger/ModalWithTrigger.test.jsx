import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
// import { render, fireEvent } from '@testing-library/react'
import ModalWithTrigger from '.'

const requiredProps = () => ({
  trigger: <button>Toggle</button>
})

describe('Component: ModalWithTrigger', () => {
  validateRequiredProps(ModalWithTrigger, requiredProps())

  // test('should output nothing without `open` prop', () => {
  //   const { queryByRole, queryByText } = render(<ModalWithTrigger {...requiredProps()} />)
  //   expect(queryByRole('dialog')).toBeNull()
  //   expect(queryByText('Default content')).toBeNull()
  // })

  // test('should output the expected markup with default props', () => {
  //   const { getByRole, getByText } = render(<ModalWithTrigger {...requiredProps()} open />)
  //   expect(getByRole('dialog')).toBeTruthy()
  //   expect(getByText('Default content')).toBeTruthy()
  // })

  // test('should trigger `onClose` prop when required', () => {
  //   const handleClose = jest.fn()
  //   const { getByRole, getByLabelText } = render(
  //     <ModalWithTrigger {...requiredProps()} open onClose={handleClose} />
  //   )
  //   expect(getByRole('dialog')).toBeTruthy()
  //   fireEvent.click(getByLabelText('Close ModalWithTrigger'))
  //   expect(handleClose).toHaveBeenCalledTimes(1)
  // })
})

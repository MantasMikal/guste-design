import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render, fireEvent } from '@testing-library/react'
import Modal from '.'

const requiredProps = () => ({
  ariaLabel: 'Example Label',
  children: 'Default content'
})

describe('Component: Modal', () => {
  validateRequiredProps(Modal, requiredProps())

  test('should output nothing without `open` prop', () => {
    const { queryByRole, queryByText } = render(<Modal {...requiredProps()} />)
    expect(queryByRole('dialog')).toBeNull()
    expect(queryByText('Default content')).toBeNull()
  })

  // TODO:
  // Fix this test

  // test('should output the expected markup with default props', () => {
  //   const { getByRole, getByText } = render(<Modal {...requiredProps()} open />)
  //   expect(getByRole('dialog')).toBeTruthy()
  //   expect(getByText('Default content')).toBeTruthy()
  // })

  // TODO:
  // Should work when Icon tests are fixed

  // test('should trigger `onClose` prop when required', () => {
  //   const handleClose = jest.fn()
  //   const { getByRole, getByLabelText } = render(
  //     <Modal {...requiredProps()} open onClose={handleClose} />
  //   )
  //   expect(getByRole('dialog')).toBeTruthy()
  //   fireEvent.click(getByLabelText('Close Modal'))
  //   expect(handleClose).toHaveBeenCalledTimes(1)
  // })
})

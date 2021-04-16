import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render, fireEvent } from '@testing-library/react'
import DotPagination from '.'

const requiredProps = () => ({ dots: 3, onChangeIndex: () => {} })

describe('Component: DotPagination', function () {
  validateRequiredProps(DotPagination, requiredProps())

  test('should output the expected markup with default props', async () => {
    const { getByLabelText, getAllByRole } = render(
      <DotPagination {...requiredProps()} />
    )
    const currentItem = getByLabelText('Current item')
    expect(getByLabelText('Pagination')).toBeTruthy()
    expect(getAllByRole('button')).toHaveLength(3)
    expect(currentItem).toBeTruthy()
    expect(currentItem).toBeDisabled()
    expect(currentItem.getAttribute('aria-current')).toEqual('true')
    expect(getByLabelText('Go to item 2')).toBeTruthy()
    expect(getByLabelText('Go to item 2')).toBeEnabled()
    expect(getByLabelText('Go to item 3')).toBeTruthy()
    expect(getByLabelText('Go to item 3')).toBeEnabled()
  })

  test('should output the expected markup if `activeIndex` prop passed', async () => {
    const { getByLabelText } = render(
      <DotPagination {...requiredProps()} activeIndex={2} />
    )
    expect(getByLabelText('Go to item 1')).toBeTruthy()
    expect(getByLabelText('Current item')).toBeTruthy()
    expect(getByLabelText('Current item').getAttribute('aria-current')).toEqual(
      'true'
    )
    expect(getByLabelText('Go to item 2')).toBeTruthy()
  })

  test('should output the custom text when `label*` props passed', async () => {
    const { getByLabelText } = render(
      <DotPagination
        {...requiredProps()}
        labelTitle="Photo Viewer Pagination"
        labelActive="Current photo"
        labelInactive="View photo"
      />
    )
    expect(getByLabelText('Photo Viewer Pagination')).toBeTruthy()
    expect(getByLabelText('Current photo')).toBeTruthy()
    expect(getByLabelText('View photo 2')).toBeTruthy()
    expect(getByLabelText('View photo 3')).toBeTruthy()
  })

  test('should trigger `onChangeIndex` function on button click', function () {
    const mockOnClick = jest.fn()
    const { getByLabelText } = render(
      <DotPagination {...requiredProps()} onChangeIndex={mockOnClick} />
    )
    expect(mockOnClick.mock.calls.length).toBe(0)
    fireEvent.click(getByLabelText('Go to item 2'))
    expect(mockOnClick.mock.calls.length).toBe(1)
  })
})

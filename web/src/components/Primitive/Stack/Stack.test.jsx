import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import Stack from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Stack', function () {
  validateRequiredProps(Stack, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<Stack {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output the expected markup with multiple children', () => {
    const { getAllByRole } = render(
      <Stack>
        <button />
        <button />
        <button />
      </Stack>
    )
    expect(getAllByRole('button')).toHaveLength(3)
  })
})

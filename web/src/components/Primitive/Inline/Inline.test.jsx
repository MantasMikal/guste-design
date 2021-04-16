import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import Inline from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Inline', () => {
  validateRequiredProps(Inline, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<Inline {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output the expected markup with multiple children', () => {
    const { getAllByRole } = render(
      <Inline>
        <button />
        <button />
        <button />
      </Inline>
    )
    expect(getAllByRole('button')).toHaveLength(3)
  })
})

import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import Blockquote from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Blockquote', () => {
  validateRequiredProps(Blockquote, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<Blockquote {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional content when `citation` prop passed', () => {
    const { getByText } = render(
      <Blockquote {...requiredProps()} citation="Firstname Lastname" />
    )
    expect(getByText('Default content')).toBeTruthy()
    expect(getByText('Firstname Lastname')).toBeTruthy()
  })

  test('should output additional styles when `quoteMarks` prop passed', () => {
    const { container } = render(<Blockquote {...requiredProps()} quoteMarks />)
    expect(container.firstChild).toHaveClass('quoteMarks')
  })
})

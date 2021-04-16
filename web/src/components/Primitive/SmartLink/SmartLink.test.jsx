import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render, fireEvent } from '@testing-library/react'
// import { BrowserRouter as Router } from 'react-router-dom'

import SmartLink from './'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: SmartLink', function () {
  validateRequiredProps(SmartLink, requiredProps())

  describe('Common functionality', function () {
    test('should output expected default attributes', function () {
      const { getByRole, getByText } = render(
        <SmartLink {...requiredProps()} />
      )
      expect(getByRole('button')).toBeTruthy()
      expect(getByText('Default content')).toBeTruthy()
    })

    test('should add additional props if passed', function () {
      const { container } = render(
        <SmartLink {...requiredProps()} disabled title="Default title" />
      )
      expect(container.firstChild).toHaveAttribute('disabled')
      expect(container.firstChild).toHaveAttribute('title', 'Default title')
    })

    test('should add onClick function if passed', function () {
      const mockOnClick = jest.fn()
      const { getByRole } = render(
        <SmartLink {...requiredProps()} onClick={mockOnClick} />
      )
      expect(mockOnClick.mock.calls.length).toBe(0)
      fireEvent.click(getByRole('button'))
      expect(mockOnClick.mock.calls.length).toBe(1)
    })
  })

  describe('as a `<button>`:', function () {
    test('should render as a `<button>` if not passed an `href` prop', function () {
      const { getByRole, getByText } = render(
        <SmartLink {...requiredProps()} />
      )
      expect(getByRole('button')).toHaveAttribute('type', 'button')
      expect(getByText('Default content')).toBeTruthy()
    })

    test('should allow a custom type prop', function () {
      const { getByRole } = render(
        <SmartLink {...requiredProps()} type="submit" />
      )
      expect(getByRole('button')).toHaveAttribute('type', 'submit')
    })
  })

  describe('as an `<a>`', function () {
    test('should render as an `<a>` if passed an external `href` prop', function () {
      const { getByRole, getByText } = render(
        <SmartLink href="http://example.com">Link Text</SmartLink>
      )
      expect(getByRole('link')).toBeTruthy()
      expect(getByText('Link Text')).toBeTruthy()
      expect(getByRole('link')).toHaveAttribute('href', 'http://example.com')
      expect(getByRole('link')).not.toHaveAttribute('target')
    })

    test('should not output a `type` prop if also passed an `href` prop', function () {
      const { getByRole } = render(
        <SmartLink type="submit" href="http://example.com">
          Link Text
        </SmartLink>
      )
      expect(getByRole('link')).toHaveAttribute('href', 'http://example.com')
      expect(getByRole('link')).not.toHaveAttribute('type')
    })

    test('should output expected markup if `disabled` prop set', function () {
      const { container } = render(
        <SmartLink disabled href="http://example.com">
          Link Text
        </SmartLink>
      )
      expect(container.firstChild).toHaveAttribute('aria-disabled', 'true')
    })

    test('should output a `target` if prop set', function () {
      const { getByRole } = render(
        <SmartLink target="_self" href="http://example.com">
          Link Text
        </SmartLink>
      )
      expect(getByRole('link')).toHaveAttribute('target', '_self')
    })

    test('should output rel attribute if `target` prop set to _blank', function () {
      const { getByRole } = render(
        <SmartLink target="_blank" href="http://example.com">
          Link Text
        </SmartLink>
      )
      expect(getByRole('link')).toHaveAttribute('target', '_blank')
      expect(getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})

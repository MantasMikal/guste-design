import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import VimeoEmbed, { VimeoEmbedFallbackUrl } from '.'

const requiredProps = () => ({ videoId: '123' })

describe('Component: VimeoEmbed', function () {
  validateRequiredProps(VimeoEmbed, requiredProps())

  test('should output the expected markup with default props', function () {
    const { container } = render(<VimeoEmbed {...requiredProps()} />)
    expect(container.firstChild).toHaveAttribute(
      'src',
      'https://player.vimeo.com/video/123?'
    )
  })

  test('should output additional querystring parameter if `hideByline` prop passed', function () {
    const { container } = render(<VimeoEmbed {...requiredProps()} hideByline />)
    expect(container.firstChild).toHaveAttribute(
      'src',
      'https://player.vimeo.com/video/123?byline=0'
    )
  })

  test('should output additional querystring parameter if `hideTitle` prop passed', function () {
    const { container } = render(<VimeoEmbed {...requiredProps()} hideTitle />)
    expect(container.firstChild).toHaveAttribute(
      'src',
      'https://player.vimeo.com/video/123?title=0'
    )
  })

  test('should output additional querystring parameter if `color` prop passed', function () {
    const { container } = render(
      <VimeoEmbed {...requiredProps()} color="123456" />
    )
    expect(container.firstChild).toHaveAttribute(
      'src',
      'https://player.vimeo.com/video/123?color=123456'
    )
  })

  test('should output additional fragment parameter `start` prop passed', function () {
    const { container } = render(<VimeoEmbed {...requiredProps()} start="20" />)
    expect(container.firstChild).toHaveAttribute(
      'src',
      'https://player.vimeo.com/video/123?#t=20s'
    )
  })

  test('should export a fallback URL', function () {
    expect(VimeoEmbedFallbackUrl('123')).toEqual('https://vimeo.com/123')
  })
})

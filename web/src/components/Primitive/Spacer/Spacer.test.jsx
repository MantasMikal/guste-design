import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import Spacer from '.'

const requiredProps = () => ({
  children: <h1>Example</h1>
})

describe('Component: Spacer', function () {
  validateRequiredProps(Spacer, requiredProps())

  test('should output the expected markup with default props', function () {
    const { container } = render(<Spacer {...requiredProps()} />)
    expect(container.querySelector('div')).toBeTruthy()
  })

  test('should output as a different element when `as` prop passed', function () {
    const { container } = render(<Spacer {...requiredProps()} as="span" />)
    expect(container.querySelector('span')).toBeTruthy()
  })

  test('should output additional styles when `m` prop passed', function () {
    const { container } = render(<Spacer {...requiredProps()} m={2} />)
    expect(container.firstChild).toHaveStyle({ margin: '16px' })
  })

  test('should output additional styles when `mx` prop passed', function () {
    const { container } = render(<Spacer {...requiredProps()} mx={2} />)
    expect(container.firstChild).toHaveStyle({
      marginLeft: '16px',
      marginRight: '16px'
    })
  })

  test('should output additional styles when `my` prop passed', function () {
    const { container } = render(<Spacer {...requiredProps()} my={2} />)
    expect(container.firstChild).toHaveStyle({
      marginTop: '16px',
      marginBottom: '16px'
    })
  })

  test('should output additional styles when `mt` prop passed', function () {
    const { container } = render(<Spacer {...requiredProps()} mt={2} />)
    expect(container.firstChild).toHaveStyle({ marginTop: '16px' })
  })

  test('should output additional styles when `mr` prop passed', function () {
    const { container } = render(<Spacer {...requiredProps()} mr={2} />)
    expect(container.firstChild).toHaveStyle({ marginRight: '16px' })
  })

  test('should output additional styles when `mb` prop passed', function () {
    const { container } = render(<Spacer {...requiredProps()} mb={2} />)
    expect(container.firstChild).toHaveStyle({ marginBottom: '16px' })
  })

  test('should output additional styles when `ml` prop passed', function () {
    const { container } = render(<Spacer {...requiredProps()} ml={2} />)
    expect(container.firstChild).toHaveStyle({ marginLeft: '16px' })
  })

  test('should allow expected overrides if multiple overlapping margin props passed', function () {
    const { container } = render(
      <Spacer {...requiredProps()} m={1} mx={2} mt={3} mr={4} />
    )
    expect(container.firstChild).toHaveStyle({
      marginLeft: '16px',
      marginRight: '32px',
      marginTop: '24px',
      margin: '24px 32px 8px 16px'
    })
  })

  test('should output additional styles when `p` prop passed', function () {
    const { container } = render(<Spacer {...requiredProps()} p={2} />)
    expect(container.firstChild).toHaveStyle({ padding: '16px' })
  })

  test('should output additional styles when `px` prop passed', function () {
    const { container } = render(<Spacer {...requiredProps()} px={2} />)
    expect(container.firstChild).toHaveStyle({
      paddingLeft: '16px',
      paddingRight: '16px'
    })
  })

  test('should output additional styles when `py` prop passed', function () {
    const { container } = render(<Spacer {...requiredProps()} py={2} />)
    expect(container.firstChild).toHaveStyle({
      paddingTop: '16px',
      paddingBottom: '16px'
    })
  })

  test('should output additional styles when `pt` prop passed', function () {
    const { container } = render(<Spacer {...requiredProps()} pt={2} />)
    expect(container.firstChild).toHaveStyle({ paddingTop: '16px' })
  })

  test('should output additional styles when `pr` prop passed', function () {
    const { container } = render(<Spacer {...requiredProps()} pr={2} />)
    expect(container.firstChild).toHaveStyle({ paddingRight: '16px' })
  })

  test('should output additional styles when `pb` prop passed', function () {
    const { container } = render(<Spacer {...requiredProps()} pb={2} />)
    expect(container.firstChild).toHaveStyle({ paddingBottom: '16px' })
  })

  test('should output additional styles when `pl` prop passed', function () {
    const { container } = render(<Spacer {...requiredProps()} pl={2} />)
    expect(container.firstChild).toHaveStyle({ paddingLeft: '16px' })
  })

  test('should allow expected overrides if multiple overlapping padding props passed', function () {
    const { container } = render(
      <Spacer {...requiredProps()} p={1} px={2} pt={3} pr={4} />
    )
    expect(container.firstChild).toHaveStyle({
      paddingLeft: '16px',
      paddingRight: '32px',
      paddingTop: '24px',
      padding: '24px 32px 8px 16px'
    })
  })

  test('should output string formatted units as authored', function () {
    const { container } = render(<Spacer {...requiredProps()} m="50%" />)
    expect(container.firstChild).toHaveStyle({ margin: '50%' })
  })
})

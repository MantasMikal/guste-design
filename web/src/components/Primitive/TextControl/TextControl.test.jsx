import React from 'react'
import { shallow } from 'enzyme'
import validateRequiredProps from 'libs/validate-required-props'

import TextControl from '.'

const requiredProps = () => ({
  name: 'example'
})

describe('Component: TextControl', function () {
  validateRequiredProps(TextControl, requiredProps())

  test('should add expected default props', function () {
    const wrapper = shallow(<TextControl {...requiredProps()} />)
    expect(wrapper.type()).toEqual('input')
    expect(wrapper.prop('placeholder')).toEqual(undefined)
    expect(wrapper.prop('className')).toEqual('TextControl')
  })

  test('should output additional styles when `multiLine` prop passed', function () {
    const wrapper = shallow(<TextControl {...requiredProps()} multiLine />)
    expect(wrapper.prop('className')).toEqual('TextControl multiLine')
  })

  test('should add props if set', function () {
    const wrapper = shallow(
      <TextControl {...requiredProps()} placeholder="Example placeholder" />
    )
    expect(wrapper.prop('placeholder')).toEqual('Example placeholder')
  })

  test('should output expected styles when `status` passed', function () {
    const wrapper = shallow(<TextControl {...requiredProps()} status="error" />)
    expect(wrapper.prop('className')).toEqual('TextControl error')
  })

  test('should add additional classes when `className` passed', function () {
    const wrapper = shallow(
      <TextControl {...requiredProps()} className="additional" />
    )
    expect(wrapper.prop('className')).toEqual('TextControl additional')
  })
})

import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { shallow } from 'enzyme'

import CheckControl from './'

const requiredProps = () => ({
  children: 'Example Text'
})

const defaultProps = () => ({
  name: 'example',
  type: 'checkbox'
})

describe('Component: CheckControl', function () {
  validateRequiredProps(CheckControl, requiredProps())

  test('should render a CustomCheckControl by default', function () {
    const wrapper = shallow(
      <CheckControl {...defaultProps()} value="1">
        Example Text
      </CheckControl>
    )
    expect(wrapper.name()).toEqual('ShrinkWrap')
    expect(wrapper.find('CustomCheckControl')).toHaveLength(1)
  })

  test('should render a NativeCheckControl if passed `native` prop', function () {
    const wrapper = shallow(
      <CheckControl {...defaultProps()} value="1" native>
        Example Text
      </CheckControl>
    )
    expect(wrapper.name()).toEqual('ShrinkWrap')
    expect(wrapper.find('NativeCheckControl')).toHaveLength(1)
  })

  test('should allow a Component as the text prop', function () {
    const wrapper = shallow(
      <CheckControl {...defaultProps()} value="1">
        <em>
          I am <strong>HTML</strong>
        </em>
      </CheckControl>
    )
    expect(wrapper.render().find('em').text()).toEqual('I am HTML')
    expect(wrapper.render().find('em').html()).toEqual(
      'I am <strong>HTML</strong>'
    )
  })

  test('should not add a checked attribute if value not set', function () {
    const wrapper = shallow(
      <CheckControl {...defaultProps()}>Example Text</CheckControl>
    )
    expect(wrapper.find('CustomCheckControl').prop('checked')).toEqual(
      undefined
    )
  })

  test('should not add a checked attribute if value not recognised', function () {
    const wrapper = shallow(
      <CheckControl {...defaultProps()}>Example Text</CheckControl>
    )
    expect(wrapper.find('CustomCheckControl').prop('checked')).toEqual(
      undefined
    )
    wrapper.setProps({ value: 'a' })
    expect(wrapper.find('CustomCheckControl').prop('checked')).toEqual(
      undefined
    )
  })

  test('should add a checked attribute', function () {
    const wrapper = shallow(
      <CheckControl {...defaultProps()}>Example Text</CheckControl>
    )
    expect(wrapper.find('CustomCheckControl').prop('checked')).toEqual(
      undefined
    )
    wrapper.setProps({ checked: true })
    expect(wrapper.find('CustomCheckControl').prop('checked')).toEqual(true)
  })
})

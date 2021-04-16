import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { shallow } from 'enzyme'
import NativeCheckControl from '.'

const requiredProps = () => ({
  name: 'example-name',
  type: 'checkbox',
  value: 'example-value'
})

describe('Component: NativeCheckControl', function () {
  validateRequiredProps(NativeCheckControl, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<NativeCheckControl {...requiredProps()} />)
    expect(wrapper.type()).toEqual('input')
    expect(wrapper.prop('name')).toEqual('example-name')
    expect(wrapper.prop('value')).toEqual('example-value')
  })

  test('should add type-specific props if set', function () {
    const wrapper = shallow(
      <NativeCheckControl {...requiredProps()} required />
    )
    expect(wrapper.prop('required')).toEqual(true)
  })
})

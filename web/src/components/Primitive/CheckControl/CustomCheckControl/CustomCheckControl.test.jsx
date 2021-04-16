import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { shallow } from 'enzyme'
import CustomCheckControl from '.'

const requiredProps = () => ({ type: 'checkbox' })

const defaultProps = () => ({
  name: 'example',
  value: '1'
})

describe('Component: CustomCheckControl', function () {
  validateRequiredProps(CustomCheckControl, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(
      <CustomCheckControl {...requiredProps()} {...defaultProps()} />
    )
    expect(wrapper.type()).toEqual('span')
    expect(wrapper.find('NativeCheckControl').prop('type')).toEqual('checkbox')
    expect(wrapper.prop('className')).toEqual('CustomCheckControl checkbox')
  })

  test('should output as expected when `radio` type passed', function () {
    const wrapper = shallow(
      <CustomCheckControl
        {...requiredProps()}
        {...defaultProps()}
        type="radio"
      />
    )
    expect(wrapper.find('NativeCheckControl').prop('type')).toEqual('radio')
    expect(wrapper.prop('className')).toEqual('CustomCheckControl radio')
  })

  test('should output expected styles when `status` passed', function () {
    const wrapper = shallow(
      <CustomCheckControl
        {...requiredProps()}
        {...defaultProps()}
        status="error"
      />
    )
    expect(wrapper.prop('className')).toEqual(
      'CustomCheckControl checkbox error'
    )
  })
})

import React from 'react'
// import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import FieldRequired from '.'

describe('Component: FieldRequired', function () {
  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<FieldRequired />)
    expect(wrapper.prop('className')).toEqual('FieldRequired')
  })
})

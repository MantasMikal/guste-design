import React from 'react'
import { shallow } from 'enzyme'
import validateRequiredProps from 'libs/validate-required-props'

import SelectControl from './'

const requiredProps = () => ({})

describe('Component: SelectControl', function () {
  validateRequiredProps(SelectControl, requiredProps())

  test('should render a CustomSelectControl by default', function () {
    const wrapper = shallow(
      <SelectControl name="exampleName">
        <option>Example</option>
      </SelectControl>
    )
    expect(wrapper.name()).toEqual('CustomSelectControl')
  })

  test('should render a NativeSelectControl if passed `native` prop', function () {
    const wrapper = shallow(
      <SelectControl name="exampleName" native>
        <option>Example</option>
      </SelectControl>
    )
    expect(wrapper.name()).toEqual('NativeSelectControl')
  })
})

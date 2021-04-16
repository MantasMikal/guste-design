import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { shallow } from 'enzyme'
import CheckControlGroup from '.'

const requiredProps = () => ({
  a11yLabel: 'Example label',
  children: [
    <label key="1">
      Input 1
      <input type="checkbox" name="example-name" value="1" />
    </label>,
    <label key="2">
      Input 2
      <input type="checkbox" name="example-name" value="2" />
    </label>
  ]
})

describe('Component: CheckControlGroup', function () {
  validateRequiredProps(CheckControlGroup, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<CheckControlGroup {...requiredProps()} />)
    expect(wrapper.find('label')).toHaveLength(2)
  })
})

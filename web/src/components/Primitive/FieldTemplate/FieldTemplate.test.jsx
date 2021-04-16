import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { shallow } from 'enzyme'

import FieldTemplate from './'

const requiredProps = () => ({})

const defaultProps = () => ({
  controlName: 'example',
  children: <input />,
  label: 'Example'
})

describe('Component: FieldTemplate', function () {
  validateRequiredProps(FieldTemplate, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(
      <FieldTemplate {...defaultProps()} template="text" />
    )
    expect(wrapper.find('TextFieldTemplate')).toHaveLength(1)
  })

  test('should output the expected markup with `template` set to `check`', function () {
    const wrapper = shallow(
      <FieldTemplate {...defaultProps()} template="check" />
    )
    expect(wrapper.find('CheckFieldTemplate')).toHaveLength(1)
  })

  test('should output the expected markup with `template` set to `multiText`', function () {
    const wrapper = shallow(
      <FieldTemplate {...defaultProps()} template="multiText" />
    )
    expect(wrapper.find('MultiTextFieldTemplate')).toHaveLength(1)
  })
})

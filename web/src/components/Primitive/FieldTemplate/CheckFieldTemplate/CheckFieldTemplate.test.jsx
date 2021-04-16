import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'

import CheckFieldTemplate from './'
import Field from '../../Field'

const requiredProps = () => ({
  controlName: 'example',
  children: <input />
})

describe('Component: CheckFieldTemplate', function () {
  test('should return errors if invalid default props passed', function () {
    const actual = validatePropTypes(CheckFieldTemplate.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.',
      controlName:
        'The prop `controlName` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function () {
    const actual = validatePropTypes(
      CheckFieldTemplate.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<CheckFieldTemplate {...requiredProps()} />)
    expect(wrapper.prop('id')).toEqual('field--example')
    expect(wrapper.find('CheckFieldTemplateQuestion')).toHaveLength(0)
  })

  test('should output FieldQuestion if passed a label', function () {
    const wrapper = shallow(
      <CheckFieldTemplate {...requiredProps()} label="Example Label" />
    )
    expect(wrapper.find('CheckFieldTemplateQuestion')).toHaveLength(1)
    expect(
      wrapper.find('VisuallyHidden CheckFieldTemplateQuestion')
    ).toHaveLength(0)
    expect(
      wrapper.find('CheckFieldTemplateQuestion').dive().prop('htmlFor')
    ).toEqual('example')
    expect(
      wrapper.find('CheckFieldTemplateQuestion').dive().find(Field.Required)
    ).toHaveLength(0)
  })

  test('should output the expected markup when optional props passed', function () {
    const wrapper = shallow(
      <CheckFieldTemplate
        {...requiredProps()}
        label="Example Label"
        status="error"
        required
        assistance="Example Assistance"
        feedback="Example Feedback"
      />
    )
    expect(wrapper.prop('status')).toEqual('error')
    expect(
      wrapper.find('CheckFieldTemplateQuestion').dive().find(Field.Required)
    ).toHaveLength(1)
    expect(wrapper.find(Field.Assistance)).toHaveLength(1)
    expect(wrapper.find(Field.Feedback)).toHaveLength(1)
  })

  test('should hide FieldQuestion if hideLabel prop passed', function () {
    const wrapper = shallow(
      <CheckFieldTemplate
        {...requiredProps()}
        label="Example Label"
        hideLabel
      />
    )
    expect(
      wrapper.find('VisuallyHidden CheckFieldTemplateQuestion')
    ).toHaveLength(1)
  })
})

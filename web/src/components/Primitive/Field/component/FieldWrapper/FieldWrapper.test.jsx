import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import FieldWrapper from '.'

const requiredProps = () => ({
  children: <p>Default content</p>
})

describe('Component: FieldWrapper', function () {
  test('should return errors if required props missing', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(FieldWrapper.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(FieldWrapper.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<FieldWrapper {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('FieldWrapper')
  })

  test('should output additional props as attributes', function () {
    const wrapper = shallow(
      <FieldWrapper {...requiredProps()} id="exampleId" />
    )
    expect(wrapper.prop('id')).toEqual('exampleId')
  })

  test('should output additional styles when `className` prop passed', function () {
    const wrapper = shallow(
      <FieldWrapper {...requiredProps()} className="example" />
    )
    expect(wrapper.prop('className')).toEqual('FieldWrapper example')
  })

  test('should output additional styles when `status` prop passed', function () {
    const wrapper = shallow(
      <FieldWrapper {...requiredProps()} status="error" />
    )
    expect(wrapper.prop('className')).toEqual('FieldWrapper error')
  })
})

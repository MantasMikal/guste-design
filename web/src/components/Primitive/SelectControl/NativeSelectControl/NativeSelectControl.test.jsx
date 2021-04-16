import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import NativeSelectControl from '.'

const requiredProps = () => ({
  children: <option>Example 1</option>,
  name: 'example'
})

describe('Component: NativeSelectControl', function () {
  test('should return errors if required props missing', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(NativeSelectControl.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.',
      name:
        'The prop `name` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(
      NativeSelectControl.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should add expected default props', function () {
    const wrapper = shallow(<NativeSelectControl {...requiredProps()} />)
    expect(wrapper.type()).toEqual('select')
    expect(wrapper.prop('placeholder')).toEqual(undefined)
    expect(wrapper.find('option')).toHaveLength(1)
    expect(wrapper.prop('className')).toEqual('NativeSelectControl')
  })

  test('should output additional styles when `multiple` prop passed', function () {
    const wrapper = shallow(
      <NativeSelectControl {...requiredProps()} multiple />
    )
    expect(wrapper.prop('className')).toEqual('NativeSelectControl multiple')
  })

  test('should output expected styles when `status` passed', function () {
    const wrapper = shallow(
      <NativeSelectControl {...requiredProps()} status="error" />
    )
    expect(wrapper.prop('className')).toEqual('NativeSelectControl error')
  })

  test('should add additional classes when `className` passed', function () {
    const wrapper = shallow(
      <NativeSelectControl {...requiredProps()} className="additional" />
    )
    expect(wrapper.prop('className')).toEqual('NativeSelectControl additional')
  })
})

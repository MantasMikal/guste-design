import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import CustomSelectControl from '.'

const requiredProps = () => ({})

describe('Component: CustomSelectControl', function () {
  // test('should return errors if required props missing', function() {
  //   // eslint-disable-next-line react/forbid-foreign-prop-types
  //   const actual = validatePropTypes(CustomSelectControl.propTypes, {})
  //   const expected = {
  //     children:
  //       'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
  //   }
  //   expect(actual).toEqual(expected)
  // })

  test('shouldn’t error if valid default props passed', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(
      CustomSelectControl.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should add expected default props', function () {
    const wrapper = shallow(
      <CustomSelectControl {...requiredProps()} name="example">
        <option>Example 1</option>
      </CustomSelectControl>
    )
    expect(wrapper.type()).toEqual('span')
    expect(wrapper.find('NativeSelectControl')).toHaveLength(1)
    expect(wrapper.find('option')).toHaveLength(1)
    expect(wrapper.prop('className')).toEqual('CustomSelectControl')
  })

  test('should output additional styles when `multiple` prop passed', function () {
    const wrapper = shallow(
      <CustomSelectControl {...requiredProps()} name="example" multiple>
        <option>Example 1</option>
      </CustomSelectControl>
    )
    expect(wrapper.prop('className')).toEqual('CustomSelectControl multiple')
  })

  test('should output expected styles when `status` passed', function () {
    const wrapper = shallow(
      <CustomSelectControl {...requiredProps()} status="error" name="example">
        <option>Example 1</option>
      </CustomSelectControl>
    )
    expect(wrapper.prop('className')).toEqual('CustomSelectControl error')
  })
})

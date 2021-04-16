import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import ShrinkWrapItem from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: ShrinkWrapItem', function () {
  test('should return errors if required props missing', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ShrinkWrapItem.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ShrinkWrapItem.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<ShrinkWrapItem {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('ShrinkWrapItem')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output additional className when `noWrap` prop passed', function () {
    const wrapper = shallow(<ShrinkWrapItem {...requiredProps()} noWrap />)
    expect(wrapper.prop('className')).toEqual('ShrinkWrapItem noWrap')
  })

  test('should output additional className when `shrink` prop passed', function () {
    const wrapper = shallow(<ShrinkWrapItem {...requiredProps()} shrink />)
    expect(wrapper.prop('className')).toEqual('ShrinkWrapItem shrink')
  })

  test('should output additional className when `spacing` prop passed', function () {
    const wrapper = shallow(
      <ShrinkWrapItem {...requiredProps()} spacing="comfortable" />
    )
    expect(wrapper.prop('className')).toEqual('ShrinkWrapItem comfortable')
  })

  test('should output additional className when `vAlign` prop passed', function () {
    const wrapper = shallow(
      <ShrinkWrapItem {...requiredProps()} vAlign="top" />
    )
    expect(wrapper.prop('className')).toEqual('ShrinkWrapItem top')
  })
})

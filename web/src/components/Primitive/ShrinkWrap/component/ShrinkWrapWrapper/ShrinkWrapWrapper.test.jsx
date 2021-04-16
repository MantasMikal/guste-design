import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import ShrinkWrapWrapper from '.'
import ShrinkWrap from '../..'

const requiredProps = () => ({
  children: <ShrinkWrap.Item>Default content</ShrinkWrap.Item>
})

describe('Component: ShrinkWrapWrapper', function () {
  test('should return errors if required props missing', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ShrinkWrapWrapper.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function () {
    const actual = validatePropTypes(
      ShrinkWrapWrapper.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<ShrinkWrapWrapper {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('ShrinkWrapWrapper')
    expect(wrapper.childAt(0).dive().text()).toEqual('Default content')
  })

  test('should output additional className when `fixed` prop passed', function () {
    const wrapper = shallow(<ShrinkWrapWrapper {...requiredProps()} fixed />)
    expect(wrapper.prop('className')).toEqual('ShrinkWrapWrapper fixed')
  })

  test('should output additional className when `fullWidth` prop passed', function () {
    const wrapper = shallow(
      <ShrinkWrapWrapper {...requiredProps()} fullWidth />
    )
    expect(wrapper.prop('className')).toEqual('ShrinkWrapWrapper fullWidth')
  })
})

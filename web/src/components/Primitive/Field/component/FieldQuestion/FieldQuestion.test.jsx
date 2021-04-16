import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import FieldQuestion from '.'

const requiredProps = () => ({
  children: 'Example text',
  htmlFor: 'example-name'
})

describe('Component: FieldQuestion', function () {
  test('should return errors if invalid default props passed', function () {
    const actual = validatePropTypes(FieldQuestion.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.',
      htmlFor:
        'The prop `htmlFor` is marked as required in `Component`, unless also using the `noLabel` prop'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function () {
    const actual = validatePropTypes(FieldQuestion.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<FieldQuestion {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('FieldQuestion')
    expect(wrapper.find('label')).toHaveLength(1)
    expect(wrapper.find('span')).toHaveLength(0)
  })

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<FieldQuestion {...requiredProps()} noLabel />)
    expect(wrapper.prop('className')).toEqual('FieldQuestion')
    expect(wrapper.find('label')).toHaveLength(0)
    expect(wrapper.find('span')).toHaveLength(1)
  })
})

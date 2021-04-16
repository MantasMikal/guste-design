import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import FieldAnswer from '.'

const requiredProps = () => ({
  children: 'Example text'
})

describe('Component: FieldAnswer', function () {
  test('should return errors if invalid default props passed', function () {
    const actual = validatePropTypes(FieldAnswer.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function () {
    const actual = validatePropTypes(FieldAnswer.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<FieldAnswer {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('FieldAnswer')
  })
})

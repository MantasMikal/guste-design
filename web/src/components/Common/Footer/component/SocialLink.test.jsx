import React from 'react'
import { shallow } from 'enzyme'

import SocialLink from './SocialLink'

const defaultProps = () => ({
  type: 'facebook',
  text: 'Text'
})

describe('Component: Downloads', function () {
  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<SocialLink {...defaultProps()} />)
    expect(wrapper.find('SmartLink')).toHaveLength(1)
  })
})

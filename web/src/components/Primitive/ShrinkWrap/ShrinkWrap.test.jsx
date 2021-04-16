import React from 'react'
import { render } from '@testing-library/react'
import ShrinkWrap from '.'

describe('Component: ShrinkWrap', function () {
  test('should output the expected markup with default props', function () {
    const { getByText } = render(
      <ShrinkWrap>
        <ShrinkWrap.Item>Item one</ShrinkWrap.Item>
        <ShrinkWrap.Item>Item two</ShrinkWrap.Item>
      </ShrinkWrap>
    )
    expect(getByText('Item one')).toBeTruthy()
    expect(getByText('Item two')).toBeTruthy()
  })
})

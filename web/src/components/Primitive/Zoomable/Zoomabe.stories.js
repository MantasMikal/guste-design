import React from 'react'

import Zoombale from '.'

export default {
  title: 'Utility/Zoomable',
  component: Zoombale
}

export const Image = (args) => (
  <Zoombale {...args}>
    <img src="http://img.clock.co.uk/600x600" alt="" />
  </Zoombale>
)

export const AnyElement = (args) => (
  <Zoombale {...args}>
    <div
      style={{ width: '400px', height: '400px', backgroundColor: '#E82468' }}
    />
  </Zoombale>
)

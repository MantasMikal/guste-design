import React from 'react'

import Image from '.'

export default {
  title: 'Core/Image',
  component: Image
}

export const Default = (args) => (
  <Image {...args} image="https://source.unsplash.com/800x600?nature" alt="" />
)

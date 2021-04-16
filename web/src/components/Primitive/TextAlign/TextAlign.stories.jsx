import React from 'react'

import TextAlign from '.'

export default {
  title: 'Utility/TextAlign',
  component: TextAlign,
  args: {
    children: 'Example text, center-aligned'
  }
}

export const Default = (args) => <TextAlign {...args} />

export const AlignedCenter = Default.bind({})
AlignedCenter.args = {
  center: true
}

export const AlignedJustified = Default.bind({})
AlignedCenter.args = {
  justify: true,
  children: `Example text, justified. Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Qui delectus voluptas perspiciatis quod sequi? Necessitatibus eaque
  tempora, odit est, atque voluptate minus magni ullam assumenda dolor
  laudantium eveniet similique sapiente!`
}

export const AlignedLeft = Default.bind({})
AlignedLeft.args = {
  left: true
}

export const AlignedRight = Default.bind({})
AlignedRight.args = {
  right: true
}

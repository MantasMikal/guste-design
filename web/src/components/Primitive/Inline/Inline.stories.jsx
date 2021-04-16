import React from 'react'
import Placeholder from 'Primitive/Placeholder'
import Inline from '.'

export default {
  title: 'Layout/Inline',
  component: Inline
}

export const Default = (args) => (
  <Inline {...args}>
    {[...Array(10).keys()].map((i) => (
      <Placeholder key={i} width={80} height={40} />
    ))}
  </Inline>
)

export const CustomGap = Default.bind({})
CustomGap.args = {
  gap: 'small'
}

export const Shrink = Default.bind({})
Shrink.args = {
  gap: 'small',
  shrink: true
}

import React from 'react'
import Placeholder from 'Primitive/Placeholder'

import Stack from '.'

export default {
  title: 'Layout/Stack',
  component: Stack
}

export const Default = (args) => (
  <Stack {...args}>
    {[...Array(4).keys()].map((i) => (
      <Placeholder key={i} height={80} />
    ))}
  </Stack>
)

export const CustomGap = () => (
  <Stack gap="large">
    {[...Array(4).keys()].map((i) => (
      <Placeholder key={i} height={80} />
    ))}
  </Stack>
)

export const NestedStacks = () => (
  <Stack gap="large">
    <Placeholder height={160} />
    <Stack gap="small">
      {[...Array(3).keys()].map((i) => (
        <Placeholder key={i} height={80} />
      ))}
    </Stack>
    <Placeholder height={160} />
  </Stack>
)

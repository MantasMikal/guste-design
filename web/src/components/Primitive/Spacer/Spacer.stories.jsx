import React from 'react'
import Placeholder from 'Primitive/Placeholder'

import Spacer from '.'

export default {
  title: 'Utility/Spacer',
  component: Spacer
}

export const Default = (args) => (
  <Spacer {...args}>
    <Placeholder height={160} />
  </Spacer>
)
Default.args = {
  px: 2,
  pt: 1,
  pb: '5px'
}

export const Margin2SpacingUnits = Default.bind({})
Margin2SpacingUnits.args = {
  m: 2
}

export const Padding2SpacingUnits = Default.bind({})
Padding2SpacingUnits.args = {
  p: 2
}

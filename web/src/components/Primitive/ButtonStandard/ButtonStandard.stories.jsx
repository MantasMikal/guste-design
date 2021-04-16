import React from 'react'

import ButtonStandard from '.'

export default {
  title: 'Core/ButtonStandard',
  component: ButtonStandard,
  args: {
    children: 'Standard Button'
  },
  argTypes: {
    block: {
      type: { name: 'boolean', required: false }
    }
  }
}

export const Default = (args) => <ButtonStandard {...args} />

export const AsAnchor = Default.bind({})
AsAnchor.args = {
  href: '#'
}

export const WithWrappingText = Default.bind({})
WithWrappingText.args = {
  children: (
    <>
      Text
      <br />
      Wrapping
    </>
  )
}

export const FullWidth = Default.bind({})
FullWidth.args = {
  block: true
}

export const LoadingState = Default.bind({})
LoadingState.args = {
  loading: true
}

export const Disabled = Default.bind({})
Disabled.args = {
  disabled: true
}

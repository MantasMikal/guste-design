import React from 'react'
import ButtonBase from '.'

export default {
  title: 'Core/ButtonBase',
  component: ButtonBase,
  args: {
    children: 'Base Button'
  }
}

export const Default = (args) => <ButtonBase {...args} />

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

export const Block = Default.bind({})
Block.args = {
  block: true
}

export const Disabled = Default.bind({})
Disabled.args = {
  disabled: true
}

import React from 'react'
import IconButton from '.'
import { types } from 'Primitive/Icon'

export default {
  title: 'Core/IconButton',
  component: IconButton,
  args: {
    iconWidth: 32,
    iconHeight: 32,
    icon: '_placeholder'
  },
  argTypes: {
    icon: {
      control: {
        options: [...types],
        type: 'select'
      }
    }
  }
}

export const Default = (args) => <IconButton {...args} type="button" />

export const SolidColour = Default.bind({})
SolidColour.args = {
  solid: true
}

export const Rounded = Default.bind({})
Rounded.args = {
  rounded: true,
  solid: true
}

export const Small = Default.bind({})
Small.args = {
  small: true
}

export const WithAdditionalContent = Default.bind({})
WithAdditionalContent.args = {
  transparent: true,
  small: true,
  children: 'Example content'
}

export const WithCustomSize = Default.bind({})
WithCustomSize.args = {
  iconWidth: 16,
  iconHeight: 16,
  solid: true
}

export const WithIncreasedHitArea = Default.bind({})
WithIncreasedHitArea.args = {
  small: true,
  increaseHitArea: true
}

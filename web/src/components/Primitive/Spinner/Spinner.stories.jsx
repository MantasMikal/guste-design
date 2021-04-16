import React from 'react'

import Spinner from '.'

export default {
  title: 'Core/Spinner',
  component: Spinner
}

export const Default = (args) => <Spinner {...args} />

export const Paused = Default.bind({})
Paused.args = {
  paused: true
}

export const DelayBeforeReveal = Default.bind({})
DelayBeforeReveal.args = {
  revealDelay: 2000
}

export const CustomSize = Default.bind({})
CustomSize.args = {
  size: 50
}

export const CustomAccessibleText = Default.bind({})
CustomAccessibleText.args = {
  a11yText: 'Loading 5 images'
}

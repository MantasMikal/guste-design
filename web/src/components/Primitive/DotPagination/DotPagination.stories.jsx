import React from 'react'
import { action } from '@storybook/addon-actions'

import DotPagination from '.'

export default {
  title: 'Core/DotPagination',
  component: DotPagination
}

export const Default = (args) => (
  <DotPagination dots={10} onChangeIndex={action('Dot clicked')} {...args} />
)

export const CustomDotSelectState = Default.bind({})
CustomDotSelectState.args = {
  activeIndex: 5
}

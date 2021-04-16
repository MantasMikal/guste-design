import React from 'react'

import Progress from '.'

export default {
  title: 'Core/Progress',
  component: Progress
}

export const EmptyState = (args) => <Progress {...args} />

export const Default = EmptyState.bind({})
Default.args = {
  value: 50
}

export const Filled = EmptyState.bind({})
Filled.args = {
  value: 100
}

export const StackedValues = EmptyState.bind({})
StackedValues.args = {
  value: [25, 20, 10, 25]
}

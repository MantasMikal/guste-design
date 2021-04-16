import React from 'react'
import List from '.'

const items = [
  <li key="1">Item 1</li>,
  <li key="2">Item 2</li>,
  <li key="3">Item 3</li>
]

export default {
  title: 'Core/List',
  component: List
}

export const Default = (args) => <List {...args}>{items}</List>

export const Inline = Default.bind({})
Inline.args = {
  inline: true
}

export const Unstyled = Default.bind({})
Unstyled.args = {
  unstyled: true
}

export const Ordered = Default.bind({})
Ordered.args = {
  ordered: true
}

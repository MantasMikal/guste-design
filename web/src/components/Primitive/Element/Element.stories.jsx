import React from 'react'

import Element from '.'

export default {
  title: 'Core/Element',
  component: Element
}

export const Default = (args) => (
  <Element {...args}>Content wrapped in h1</Element>
)

export const WithSpecificELement = Default.bind({})
WithSpecificELement.args = {
  as: 'h2'
}

import React from 'react'

import Type, { sizes } from '.'

export default {
  title: 'Core/Type',
  component: Type
}

export const Default = (args) => <Type {...args}>Example Type</Type>

export const WithTightModifier = Default.bind({})
WithTightModifier.args = {
  tight: true
}

export const AllSizes = () => (
  <div>
    {sizes.map((size) => (
      <div style={{ margin: '5px 0 20px' }} key={`Type${size}`}>
        <code style={{ display: 'block' }}>{size}</code>
        <Type size={size}>Example content</Type>
      </div>
    ))}
  </div>
)

export const WithCustomElement = (args) => (
  <div>
    {['h1', 'a', 'span'].map((element) => (
      <div style={{ margin: '5px 0 20px' }} key={`Type${element}`}>
        <code style={{ display: 'block' }}>{element}</code>
        <Type {...args} as={element}>
          Example content as &lt;{element}/&gt;
        </Type>
      </div>
    ))}
  </div>
)

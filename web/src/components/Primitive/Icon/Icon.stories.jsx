import React from 'react'

import Icon, { types, vAligns } from '.'

export default {
  title: 'Core/Icon',
  component: Icon,
  args: {
    width: 32,
    height: 32,
    type: '_placeholder'
  },
  argTypes: {
    type: {
      control: {
        options: [...types],
        type: 'select'
      }
    }
  }
}

export const Default = (args) => <Icon {...args} />

export const AllAvailableTypes = (args) => (
  <div>
    {types.map((type, i) => (
      <div style={{ margin: '5px 0' }} key={`icon-${i}`}>
        <Icon {...args} type={type} a11yText={`${type} icon`} />{' '}
        <code>{type}</code>
      </div>
    ))}
  </div>
)
AllAvailableTypes.args = {
  vAlign: 'middle'
}

export const WithVAlign = (args) => (
  <div>
    {vAligns.map((vAlign, i) => (
      <div style={{ margin: '5px 0' }} key={`icon-${i}`}>
        <Icon
          type="_placeholder"
          a11yText="Placeholder icon"
          height={100}
          vAlign={vAlign}
          {...args}
        />{' '}
        <code>{vAlign}</code>
      </div>
    ))}
  </div>
)

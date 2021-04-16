import React from 'react'
import { action } from '@storybook/addon-actions'

import DecoratedTextControl from '.'
import Icon from 'Primitive/Icon'

export default {
  title: 'Form/DecoratedTextControl',
  component: DecoratedTextControl
}

export const Default = (args) => (
  <DecoratedTextControl
    {...args}
    name="exampleText"
    type="text"
    placeholder="Example placeholder"
    before={<Icon type="_placeholder" a11yText="placeholder icon" />}
    after={<Icon type="_placeholder" a11yText="placeholder icon" />}
  />
)

export const Interactive = (args) => (
  <DecoratedTextControl
    {...args}
    name="exampleText"
    type="text"
    placeholder="Example placeholder"
    before={
      <button onClick={action('button-click')}>
        <Icon type="_placeholder" a11yText="placeholder icon" />
      </button>
    }
    beforeInteractive
    after={
      <button onClick={action('button-click')}>
        <Icon type="_placeholder" a11yText="placeholder icon" />
      </button>
    }
    afterInteractive
  />
)

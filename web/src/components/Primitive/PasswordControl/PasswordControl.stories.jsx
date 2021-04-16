import React from 'react'

import PasswordControl from '.'

export default {
  title: 'Form/PasswordControl',
  component: PasswordControl,
  argTypes: {
    defaultValue: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    defaultValue: '1245'
  }
}

export const Default = (args) => <PasswordControl {...args} name="password" />

export const ForcedTextType = Default.bind({})
ForcedTextType.args = {
  type: 'text'
}

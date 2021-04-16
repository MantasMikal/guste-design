import React from 'react'
import { action } from '@storybook/addon-actions'

import Toast from '.'

export default {
  title: 'Core/Toast',
  component: Toast,
  argTypes: {
    status: {
      control: {
        type: 'inline-radio',
        options: ['success', 'error', 'warning', 'notice']
      }
    },
    x: {
      control: {
        type: 'inline-radio',
        options: ['left', 'top', 'right', 'center', 'bottom']
      }
    },
    y: {
      control: {
        type: 'inline-radio',
        options: ['left', 'top', 'right', 'center', 'bottom']
      }
    }
  }
}

export const Default = (args) => <Toast {...args}>Content</Toast>

export const NotificationSpecificProps = Default.bind({})
NotificationSpecificProps.args = {
  icon: '_placeholder',
  onDismiss: action('Dismiss'),
  status: 'error'
}

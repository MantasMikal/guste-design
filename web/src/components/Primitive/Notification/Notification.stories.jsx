import React from 'react'
import { action } from '@storybook/addon-actions'

import { StatusContextProvider } from 'Context/StatusContext'

import Notification from '.'
import Prose from '../Prose'
import Stack from '../Stack'

export default {
  title: 'Core/Notification',
  component: Notification,
  argTypes: {
    status: {
      control: {
        type: 'inline-radio',
        options: ['success', 'error', 'warning', 'notice']
      }
    }
  },
  args: {
    children: 'Content'
  }
}

export const Default = (args) => <Notification {...args} />

export const WithIcon = Default.bind({})
WithIcon.args = {
  icon: '_placeholder'
}

export const WithLongContent = Default.bind({})
WithLongContent.args = {
  icon: '_placeholder',
  children: (
    <Prose>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
      lacinia odio sem nec elit. Sociis natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna,
      vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis
      dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Vivamus
      sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
    </Prose>
  )
}

export const WithDismissButton = Default.bind({})
WithDismissButton.args = {
  onDismiss: action('Dismiss')
}

export const WithStatus = Default.bind({})
WithStatus.args = {
  status: 'warning'
}

export const WithStatusContext = (args) => (
  <StatusContextProvider status="error">
    <Notification>Content</Notification>
  </StatusContextProvider>
)
export const WithShadow = Default.bind({})
WithShadow.args = {
  shadow: true
}

export const AllStatus = (args) => (
  <Stack>
    {['none', 'success', 'notice', 'warning', 'error'].map((status) => (
      <Notification
        {...args}
        key={`status-${status}`}
        status={status}
        icon="_placeholder"
        onDismiss={action('Dismiss')}
      >
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit.
      </Notification>
    ))}
  </Stack>
)

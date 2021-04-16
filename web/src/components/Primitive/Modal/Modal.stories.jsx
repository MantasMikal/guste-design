import React from 'react'
import { action } from '@storybook/addon-actions'

import Modal from '.'

import ButtonStandard from '../ButtonStandard'
import Inline from '../Inline'
import TextAlign from '../TextAlign'

export default {
  title: 'Core/Modal',
  component: Modal,
  args: {
    children: 'Example content',
    open: true,
    onClose: action('Close clicked')
  }
}

export const Default = (args) => <Modal {...args} ariaLabel="Example Modal" />

export const Alert = Default.bind({})
Alert.args = {
  actions: <ButtonStandard onClick={action('OK clicked')}>OK</ButtonStandard>,
  children: <TextAlign center>Example content</TextAlign>
}

export const Dialog = Default.bind({})
Dialog.args = {
  children: <TextAlign center>Example content</TextAlign>,
  actions: (
    <Inline>
      <ButtonStandard onClick={action('Save clicked')}>Save</ButtonStandard>
      <ButtonStandard onClick={action('Cancel clicked')}>Cancel</ButtonStandard>
    </Inline>
  )
}

export const WithHeading = Default.bind({})
WithHeading.args = {
  heading: 'Example Heading',
  children: 'Default content'
}

export const Closed = Default.bind({})
Closed.args = {
  heading: 'Example Heading',
  children: 'Default content'
}

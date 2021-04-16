import React from 'react'

import { StatusContextProvider } from '../../Context/StatusContext'
import TextControl from '.'

export default {
  title: 'Form/TextControl',
  component: TextControl,
  args: {
    placeholder: 'Example placeholder'
  },
  argTypes: {
    status: {
      control: {
        type: 'inline-radio',
        options: ['success', 'error', 'warning', 'notice']
      }
    }
  }
}

export const Default = (args) => (
  <TextControl name="exampleText" type="text" {...args} />
)

export const WithValue = Default.bind({})
WithValue.args = {
  value: 'Example Value'
}

export const Disabled = Default.bind({})
Disabled.args = {
  disabled: true
}

export const WithStatus = Default.bind({})
WithStatus.args = {
  status: 'error'
}

export const WithStatusContext = () => (
  <StatusContextProvider status="success">
    <TextControl name="exampleText" type="text" />
  </StatusContextProvider>
)

export const TextArea = (args) => (
  <TextControl
    {...args}
    name="exampleTextarea"
    placeholder="Example placeholder"
    multiLine
  />
)

export const TextAreaWithCustomHeight = TextArea.bind({})
TextAreaWithCustomHeight.args = {
  rows: 10
}

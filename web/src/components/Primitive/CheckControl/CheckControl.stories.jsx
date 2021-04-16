import React from 'react'

import { StatusContextProvider } from '../../Context/StatusContext'
import CheckControl from '.'

export default {
  title: 'Form/CheckControl',
  component: CheckControl,
  args: {
    name: 'exampleCheck'
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

export const Checkbox = (args) => (
  <CheckControl type="checkbox" value="1" {...args}>
    Example text
  </CheckControl>
)

export const CheckboxChecked = Checkbox.bind({})
CheckboxChecked.args = {
  checked: true
}

export const CheckboxNative = Checkbox.bind({})
CheckboxNative.args = {
  checked: true,
  native: true
}

export const CheckboxWithDirectStatus = Checkbox.bind({})
CheckboxWithDirectStatus.args = {
  status: 'success'
}

export const CheckboxWithStatusContext = (args) => (
  <StatusContextProvider status="success">
    <CheckControl {...args} type="checkbox" value="1">
      Example text
    </CheckControl>
  </StatusContextProvider>
)

export const Radio = Checkbox.bind({})
Radio.args = {
  type: 'radio',
  name: 'exampleRadio1'
}

export const RadioChecked = Checkbox.bind({})
RadioChecked.args = {
  type: 'radio',
  checked: true,
  name: 'exampleRadio2'
}

export const RadioWithDirectStatus = Checkbox.bind({})
RadioWithDirectStatus.args = {
  type: 'radio',
  status: 'success',
  name: 'exampleRadio3'
}

export const RadioWithStatusContext = (args) => (
  <StatusContextProvider status="warning">
    <CheckControl {...args} type="radio" value="1">
      Example text
    </CheckControl>
  </StatusContextProvider>
)
RadioWithStatusContext.args = {
  name: 'exampleRadio4'
}

export const RadioNative = Checkbox.bind({})
RadioNative.args = {
  type: 'radio',
  native: true,
  name: 'exampleRadio5'
}

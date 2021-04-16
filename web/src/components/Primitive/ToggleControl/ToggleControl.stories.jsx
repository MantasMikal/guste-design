import React from 'react'

import { StatusContextProvider } from 'Context/StatusContext'
import ToggleControl from '.'

export default {
  title: 'Form/ToggleControl',
  component: ToggleControl,
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
  <label htmlFor="id-1">
    <ToggleControl
      {...args}
      id="id-1"
      name="exampleToggleControl"
      value="true"
    />
  </label>
)

export const Checked = Default.bind({})
Checked.args = {
  checked: true
}

export const Loading = Default.bind({})
Loading.args = {
  loading: true
}

export const Disabled = Default.bind({})
Disabled.args = {
  disabled: true
}

export const WithStatus = Default.bind({})
WithStatus.args = {
  status: 'error'
}

export const CustomLabels = (args) => (
  <div>
    <label htmlFor="id-1">
      <ToggleControl
        id="id-1"
        textChecked="On"
        textUnchecked="Off"
        name="exampleToggleControl"
        value="true"
      />
    </label>
    <label htmlFor="id-2">
      <ToggleControl
        id="id-2"
        textChecked="I"
        textUnchecked="O"
        name="exampleToggleControl"
        value="true"
      />
    </label>
    <label htmlFor="id-3">
      <ToggleControl
        id="id-3"
        textChecked="👍"
        textUnchecked="☠️"
        name="exampleToggleControl"
        value="true"
      />
    </label>
  </div>
)

export const WithStatusContext = (args) => (
  <StatusContextProvider status="success">
    <label htmlFor="id-1">
      <ToggleControl id="id-1" name="exampleToggleControl" value="true" />
    </label>
  </StatusContextProvider>
)

import React from 'react'

import { StatusContextProvider } from '../../Context/StatusContext'
import SelectControl from '.'

const options = [
  <option value="one" key="1">
    Example One
  </option>,
  <option value="two" key="2">
    Example Two
  </option>,
  <option value="three" key="3">
    Example Three
  </option>,
  <option value="four" key="4">
    Example Four
  </option>
]

export default {
  title: 'Form/SelectControl',
  component: SelectControl,
  argTypes: {
    status: {
      control: {
        type: 'inline-radio',
        options: ['success', 'error', 'warning', 'notice']
      }
    },
    size: {
      control: {
        type: 'number'
      }
    },
    multiple: {
      control: {
        type: 'boolean'
      }
    }
  }
}

export const Default = (args) => (
  <SelectControl {...args} name="exampleSelect" onChange={() => {}}>
    {options}
  </SelectControl>
)

export const PreSelectedValue = Default.bind({})
PreSelectedValue.args = {
  value: 'two'
}

export const Disabled = Default.bind({})
Disabled.args = {
  disabled: true
}

export const WithStatus = Default.bind({})
WithStatus.args = {
  status: 'success'
}

export const WithStatusContext = (args) => (
  <StatusContextProvider status="success">
    <SelectControl
      {...args}
      name="exampleSelect"
      onChange={() => {}}
      type="text"
    >
      {options}
    </SelectControl>
  </StatusContextProvider>
)

export const MultiSelect = (args) => (
  <SelectControl onChange={() => {}} {...args} name="exampleSelect">
    {options}
  </SelectControl>
)
MultiSelect.args = {
  multiple: true
}

export const MultiLineWithCustomTooShortHeight = MultiSelect.bind({})
MultiLineWithCustomTooShortHeight.args = {
  multiple: true,
  size: 2
}

export const MultiLineWithCustomTooTallHeight = MultiSelect.bind({})
MultiLineWithCustomTooTallHeight.args = {
  multiple: true,
  size: 10
}

export const DefaultNative = Default.bind({})
DefaultNative.args = {
  multiple: true,
  native: true
}

export const MultiSelectNative = MultiSelect.bind({})
MultiSelectNative.args = {
  multiple: true,
  native: true
}

export const MultiLineWithCustomTooShortHeightNative = MultiSelect.bind({})
MultiLineWithCustomTooShortHeightNative.args = {
  multiple: true,
  native: true,
  size: 2
}

export const MultiLineWithCustomTooTallHeightNative = MultiSelect.bind({})
MultiLineWithCustomTooTallHeightNative.args = {
  multiple: true,
  native: true,
  size: 10
}

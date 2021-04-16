import React from 'react'
import Toaster from '.'

export default {
  title: 'Core/Toaster',
  component: Toaster
}

export const Default = (args) => <Toaster {...args}>Content</Toaster>

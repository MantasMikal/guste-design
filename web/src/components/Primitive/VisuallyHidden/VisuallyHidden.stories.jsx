import React from 'react'

import VisuallyHidden from '.'

export default {
  title: 'Utility/VisuallyHidden',
  component: VisuallyHidden
}

export const Default = (args) => (
  <VisuallyHidden {...args}>Example hidden content</VisuallyHidden>
)

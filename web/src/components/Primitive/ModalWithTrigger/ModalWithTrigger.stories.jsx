import React from 'react'

import ModalWithTrigger from '.'

import ButtonStandard from '../ButtonStandard'

export default {
  title: 'Core/ModalWithTrigger',
  component: ModalWithTrigger
}

export const Default = (args) => (
  <ModalWithTrigger
    ariaLabel="Example ModalWithTrigger"
    trigger={<ButtonStandard>Toggle Modal</ButtonStandard>}
    {...args}
  >
    Example Content
  </ModalWithTrigger>
)

import React from 'react'

import Blockquote from '.'

export default {
  title: 'Core/Blockqoute',
  component: Blockquote
}

export const Default = (args) => (
  <Blockquote {...args}>
    This is an amazing pull quote for an article
  </Blockquote>
)

export const WithCitation = Default.bind({})
WithCitation.args = {
  citation: 'Firstname Lastname'
}

export const WithQuoteMarks = Default.bind({})
WithQuoteMarks.args = {
  quoteMarks: true,
  citation: 'Firstname Lastname'
}

import React from 'react'

import DescriptionList from '.'

export default {
  title: 'Core/DescriptionList',
  component: DescriptionList
}

export const Default = (args) => (
  <DescriptionList
    {...args}
    items={{
      Position: 'Prop',
      Age: '27',
      Height: '200cm',
      'Games Played': '41'
    }}
  />
)

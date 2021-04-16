import React from 'react'

import Container from '.'

const content =
  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.'

export default {
  title: 'Layout/Container',
  component: Container
}

export const Default = (args) => <Container {...args}>{content}</Container>

export const WithGutter = Default.bind({})
WithGutter.args = {
  gutter: true
}

export const WithSize = Default.bind({})
WithSize.args = {
  size: 'small'
}

export const WithCenteringAndSize = Default.bind({})
WithCenteringAndSize.args = {
  center: true,
  size: 'small'
}

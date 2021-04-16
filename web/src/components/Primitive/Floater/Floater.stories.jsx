import React from 'react'
import Floater from '.'

const content = (
  <p>
    Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem
    malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor
    fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
    porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Donec sed odio dui. Maecenas sed diam eget
    risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus
    sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
  </p>
)

export default {
  title: 'Utility/Floater',
  component: Floater
}

export const Default = (args) => (
  <div style={{ overflow: 'auto' }}>
    <Floater {...args}>
      <img src="https://source.unsplash.com/800x600?nature" alt="" />
    </Floater>
    {content}
  </div>
)

export const AlignedLeft = Default.bind({})
AlignedLeft.args = {
  size: 'small',
  align: 'left'
}

export const AlignedRight = Default.bind({})
AlignedRight.args = {
  size: 'small',
  align: 'right'
}

export const WithSetSize = Default.bind({})
WithSetSize.args = {
  size: 'medium'
}

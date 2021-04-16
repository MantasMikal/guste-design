import React from 'react'

import ScrollArea from '.'

export default {
  title: 'Core/ScrollArea',
  component: ScrollArea
}

export const Default = (args) => (
  <div style={{ height: 110 }}>
    <ScrollArea {...args}>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit
      aliquet. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Sed posuere consectetur est at
      lobortis. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu
      leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam
      porta sem malesuada magna mollis euismod. Praesent commodo cursus magna,
      vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque
      ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante
      venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed
      consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      posuere consectetur est at lobortis. Donec ullamcorper nulla non metus
      auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
      venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
    </ScrollArea>
  </div>
)

export const HiddenScrollBar = Default.bind({})
HiddenScrollBar.args = {
  hideScrollbar: true
}

export const HorizontalScroll = (args) => (
  <div style={{ height: 110, whiteSpace: 'nowrap' }}>
    <ScrollArea {...args}>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit
      aliquet. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Sed posuere consectetur est at
      lobortis. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu
      leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam
      porta sem malesuada magna mollis euismod. Praesent commodo cursus magna,
      vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque
      ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante
      venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed
      consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      posuere consectetur est at lobortis. Donec ullamcorper nulla non metus
      auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
      venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
    </ScrollArea>
  </div>
)
HorizontalScroll.args = {
  horizontal: true
}

export const HorizontalHiddenScrollBar = HorizontalScroll.bind({})
HorizontalHiddenScrollBar.args = {
  hideScrollbar: true
}

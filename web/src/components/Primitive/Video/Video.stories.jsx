import React from 'react'

import Video from '.'

export default {
  title: 'Core/Video',
  component: Video
}

export const Youtube = (...args) => (
  <Video videoType="youtube" videoId="ScMzIvxBSi4" {...args} />
)
export const Vimeo = (...args) => (
  <Video videoType="vimeo" videoId="22439234" {...args} />
)

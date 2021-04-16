import React from 'react'
import ResponsiveMedia from './'

export default {
  title: 'Core/ResponsiveMedia',
  component: ResponsiveMedia,
  args: {
    ratio: 9 / 16
  }
}

export const Default = (args) => (
  <ResponsiveMedia {...args}>
    <img src="https://source.unsplash.com/800x600?nature" alt="" />
  </ResponsiveMedia>
)

export const WithVideo = (args) => (
  <ResponsiveMedia {...args}>
    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
    <video
      controls
      poster="https://source.unsplash.com/800x600?nature"
      src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    />
  </ResponsiveMedia>
)

export const withIFrame = (args) => (
  <ResponsiveMedia {...args}>
    <iframe
      title="Example YouTube embed"
      src="https://www.youtube.com/embed/ScMzIvxBSi4?showinfo=0&amp;playsinline=1&amp;rel=0"
      width="500"
      height="281"
      frameBorder="0"
      allowFullScreen=""
    />
  </ResponsiveMedia>
)

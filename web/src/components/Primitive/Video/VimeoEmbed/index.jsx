import React from 'react'
import { bool, string } from 'prop-types'

import shallowObjectToQuery from 'libs/shallow-object-to-query'

export const VimeoEmbedFallbackUrl = (videoId) => `https://vimeo.com/${videoId}`

/**
 * Embeds a Vimeo video, with options for common video API preferences.

 * To make the video responsive, wrap in in a \`ResponsiveMedia\` component.
 */
const VimeoEmbed = ({ color, hideByline, hideTitle, start, videoId }) => {
  const srcPrefix = 'https://player.vimeo.com/video/'
  const query = {
    ...(color && { color: color.replace('#', '') }),
    ...(hideByline && { byline: 0 }),
    ...(hideTitle && { title: 0 })
  }
  const formattedStart = start ? `#t=${start}s` : ``

  return (
    <iframe
      title="Embedded YouTube video"
      src={`${srcPrefix}${videoId}?${shallowObjectToQuery(
        query
      )}${formattedStart}`}
      width="640"
      height="360"
      frameBorder="0"
      allowFullScreen
    />
  )
}

VimeoEmbed.propTypes = {
  start: string,
  color: string,
  hideTitle: bool,
  hideByline: bool,
  videoId: string.isRequired
}

export default VimeoEmbed

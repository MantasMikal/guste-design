import React from 'react'
import { bool, string } from 'prop-types'

import shallowObjectToQuery from 'libs/shallow-object-to-query'

export const YouTubeEmbedFallbackUrl = (videoId) =>
  `https://www.youtube.com/watch?v=${videoId}`

/**
 * Embeds a Vimeo video, with options for common video API preferences.

 * To make the video responsive, wrap in in a \`ResponsiveMedia\` component.
 */
const YouTubeEmbed = ({ hideControls, start, videoId }) => {
  const srcPrefix = 'https://www.youtube.com/embed/'
  const query = {
    modestbranding: 1,
    playsinline: 1,
    rel: 0, // https://developers.google.com/youtube/player_parameters#release_notes_08_23_2018
    ...(hideControls && { controls: 0 }),
    ...(start && { start })
  }

  return (
    <iframe
      title="Embedded YouTube video"
      src={`${srcPrefix}${videoId}?${shallowObjectToQuery(query)}`}
      width="560"
      height="315"
      frameBorder="0"
      allowFullScreen
    />
  )
}

YouTubeEmbed.propTypes = {
  hideControls: bool,
  start: string,
  videoId: string.isRequired
}

export default YouTubeEmbed

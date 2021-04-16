import React from 'react'
import Video from 'Primitive/Video'

const createVideo = (video) => {
  if (!video || !video.videoId || !video.videoType) return null
  return (
    <Video
      key={video._key}
      videoType={video.videoType}
      videoId={video.videoId}
    />
  )
}

export default createVideo

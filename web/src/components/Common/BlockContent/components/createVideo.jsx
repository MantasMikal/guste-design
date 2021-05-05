import React from 'react'
import Video from 'Primitive/Video'

const createVideo = (video) => {
  if (!video || !video.videoId || !video.videoType) return null
  console.log("🚀 ~ file: createVideo.jsx ~ line 8 ~ createVideo ~ video", video)
  const border = video.border ? { border: `2px solid black` } : null
  const styles = {
    ...border,
    marginBottom: '8px'
  }
  return (
    <Video
      style={styles}
      key={video._key}
      videoType={video.videoType}
      videoId={video.videoId}
    />
  )
}

export default createVideo

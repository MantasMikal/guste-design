import React from 'react'
import Carousel from 'Primitive/Carousel'
import createMedia from './createMedia'

// TODO:
// Add controls like
// - slide width
// - slides per page

const createSlideshow = (node) => {
  const media = node.slides.map((item) => createMedia(item))
  return <Carousel>{media}</Carousel>
}

export default createSlideshow

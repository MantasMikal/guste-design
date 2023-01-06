import ImageHero from 'Common/ImageHero'
import React from 'react'

const createHero = (component) => {
  if (!component) return null

  return (
    <ImageHero {...component} />
  ) 
}

export default createHero

import React from 'react'
import { object, number, string, oneOfType } from 'prop-types'
import { getGatsbyImageData } from 'gatsby-source-sanity'

import { GatsbyImage } from 'gatsby-plugin-image'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'
import cfg from '../../../../../config'

/**
 * Component to handle all types images with ratio support
 */
const Image = ({ image, ratio, imgWrapperStyle, imgStyle, alt, ...other }) => {
  if (!image) return null
  const imageData = getGatsbyImageData(
    image.asset,
    { maxWidth: 700 },
    cfg.project
  )
  const altText = alt || image.alt || ''

  if (ratio) {
    return (
      <ResponsiveMedia ratio={ratio}>
        <GatsbyImage
          style={imgWrapperStyle}
          imgStyle={imgStyle}
          image={imageData}
          alt={altText}
          {...other}
        />
      </ResponsiveMedia>
    )
  }

  return (
    <GatsbyImage
      style={imgWrapperStyle}
      imgStyle={imgStyle}
      image={imageData}
      alt={altText}
      {...other}
    />
  )
}

Image.propTypes = {
  image: oneOfType([string, object]).isRequired,
  ratio: number,
  imgWrapperStyle: object,
  imgStyle: object,
  alt: string
}

export default Image

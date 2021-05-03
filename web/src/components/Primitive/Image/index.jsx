import React from 'react'
import { object, number, string, oneOfType } from 'prop-types'
import { getGatsbyImageData } from 'gatsby-source-sanity'

import { GatsbyImage } from 'gatsby-plugin-image'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'
import cfg from '../../../../../config'
import { oneOf } from 'prop-types'

/**
 * Component to handle all types images with ratio support
 */
const Image = ({
  image,
  ratio,
  imgWrapperStyle,
  maxWidth,
  imgStyle,
  alt,
  layout = 'fullWidth',
  ...other
}) => {
  if (!image) return null
  let imageData = {}

  if (image.localFile) {
    imageData = image.localFile.childImageSharp.gatsbyImageData
  } else if (image.localImage) {
    imageData = image.localImage.childImageSharp.gatsbyImageData
  } else {
    imageData = getGatsbyImageData(
      image.asset,
      { maxWidth: maxWidth, layout: layout, placeholder: 'blurred' },
      cfg.project
    )
  }

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
  layout: oneOf(['fullWidth', 'constrained', 'fixed']),
  alt: string
}

export default Image

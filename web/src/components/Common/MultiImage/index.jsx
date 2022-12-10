/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react'
import classNames from 'classnames'
import { array, number } from 'prop-types'

import Image from 'Primitive/Image'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'

import styles from './MultiImage.module.scss'

const MultiImage = ({ images, skipAmount = 10, ratio = 1, ...other }) => {
  const isSSR = typeof window === 'undefined'
  const isTouch =
    !isSSR && matchMedia('(hover: none), (pointer: coarse)').matches

  if (images?.length === 0) return null

  if (isTouch || images?.length === 1) {
    return <Image image={images[0]} ratio={ratio} {...other} />
  } else {
    return (
      <Multi images={images} skipAmount={skipAmount} ratio={ratio} {...other} />
    )
  }
}

const Multi = ({ images, skipAmount, ratio, className, ...other }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [move, setMove] = useState(skipAmount)

  // Decrease counter on mouse move and change images
  const handleHover = () => {
    setMove((prevState) => prevState - 0.5)
    if (move <= 0) {
      const imageIdx = currentIndex < images?.length - 1 ? currentIndex + 1 : 0
      setCurrentIndex(imageIdx)
      setMove(skipAmount)
    }
  }
  const isActive = (i, id) => i === id || (i === 0 && i !== id)
  return (
    <ResponsiveMedia className={className} ratio={ratio} onMouseMove={handleHover}>
      {images &&
        images.length > 0 &&
        images.map((img, i) => (
          <div
            className={classNames(
              styles.ImageWrapper,
              isActive(i, currentIndex) && styles.active
            )}
            key={`MultiImage-${i}`}
          >
            <MemoImage className={styles.Image} image={img} {...other} />
          </div>
        ))}
    </ResponsiveMedia>
  )
}

const MemoImage = React.memo(Image)

MultiImage.propTypes = {
  images: array.isRequired,
  skipAmount: number,
  ratio: number
}

export default MultiImage

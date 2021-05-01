import React, { useState } from 'react'
import classNames from 'classnames'
import { array, number, oneOf } from 'prop-types'

import Image from 'Primitive/Image'

import styles from './MultiImage.module.scss'

const MultiImage = ({ images, skipAmount = 10, size = 'landscape' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [move, setMove] = useState(skipAmount)

  // Decrease counter on mouse move and change images
  const handleHover = () => {
    setMove((prevState) => prevState - 1)
    if (move <= 0) {
      const imageIdx = currentIndex < images.length - 1 ? currentIndex + 1 : 0
      setCurrentIndex(imageIdx)
      setMove(skipAmount)
    }
  }
  const isActive = (i, id) => i == id || (i == 0 && i != id)
  return (
    <div className={classNames(styles.MultiImage, styles[size])} onMouseMove={handleHover}>
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
            <MemoImage image={img} />
          </div>
        ))}
    </div>
  )
}

const MemoImage = React.memo(Image)

MultiImage.propTypes = {
  images: array.isRequired,
  skipAmount: number,
  sizes: oneOf(['landscape', 'square', 'portrait'])
}

export default MultiImage

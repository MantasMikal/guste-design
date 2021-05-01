import React, { useState } from 'react'
import { array } from 'prop-types'

import Image from 'Primitive/Image'

import styles from './ImageGallery.module.scss'

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className={styles.ImageGallery}>
      <div className={styles.MainImage}>
        <MemoImage image={images[currentIndex]} ratio={1} />
      </div>
      <div className={styles.Images}>
        {images &&
          images.length > 0 &&
          images.map((img, i) => (
            <button
              className={styles.ImageWrapper}
              onClick={() => setCurrentIndex(i)}
              key={`ImageGallery-${i}`}
            >
              <MemoImage image={img} ratio={1} />
            </button>
          ))}
      </div>
    </div>
  )
}

const MemoImage = React.memo(Image)

ImageGallery.propTypes = {
  images: array.isRequired
}

export default ImageGallery

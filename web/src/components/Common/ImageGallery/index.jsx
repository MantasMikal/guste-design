import React, { useState } from 'react'
import { array } from 'prop-types'
import cn from 'classnames'

import Image from 'Primitive/Image'
import {
  TransformComponent,
  TransformWrapper
} from '@pronestor/react-zoom-pan-pinch'

import styles from './ImageGallery.module.scss'

const ImageGallery = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className={cn(styles.ImageGallery, className)}>
      <TransformWrapper initialScale={1}>
        {({ resetTransform }) => (
          <>
            <div className={styles.MainImage}>
              <TransformComponent>
                <MemoImage image={images[currentIndex]} ratio={1} />
              </TransformComponent>
            </div>
            <div className={styles.Images}>
              {images &&
                images.length > 0 &&
                images.map((img, i) => (
                  <button
                    className={cn(
                      styles.ImageWrapper,
                      currentIndex === i && styles.active
                    )}
                    onClick={() => {
                      resetTransform()
                      setCurrentIndex(i)
                    }}
                    key={`ImageGallery-${i}`}
                  >
                    <MemoImage image={img} ratio={1} />
                  </button>
                ))}
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  )
}

const MemoImage = React.memo(Image)

ImageGallery.propTypes = {
  images: array.isRequired
}

export default ImageGallery

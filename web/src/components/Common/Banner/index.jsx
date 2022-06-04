import React from 'react'
import { array, string } from 'prop-types'
import classNames from 'classnames'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import Image from 'Primitive/Image'

import styles from './Banner.module.scss'
import 'pure-react-carousel/dist/react-carousel.es.css'

const MemoImage = React.memo(Image)

const Banner = ({ desktopImages, className }) => {
  if(desktopImages?.length === 0) return null
  return (
    <div className={classNames(styles.Banner, className)}>
      <CarouselProvider
        naturalSlideWidth={600}
        naturalSlideHeight={500}
        totalSlides={desktopImages?.length}
        isIntrinsicHeight
        isPlaying
        interval={5000}
        className={styles.Carousel}
      >
        <Slider className={styles.Slider}>
          {desktopImages.map((img, i) => (
            <Slide key={`DesktopImage-${i}`} index={i}>
              <div className={styles.DesktopImage}>
                <MemoImage image={img} ratio={1 / 4} />
              </div>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  )
}

Banner.propTypes = {
  desktopImages: array.isRequired,
  mobileImages: array.isRequired,
  className: string
}

export default Banner

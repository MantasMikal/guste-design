import React from 'react'
import { array, string } from 'prop-types'
import classNames from 'classnames'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'

import useMedia from 'hooks/useMedia'
import Image from 'Primitive/Image'

import styles from './Banner.module.scss'
import 'pure-react-carousel/dist/react-carousel.es.css'

const MemoImage = React.memo(Image)

const Banner = ({ desktopImages, mobileImages, className }) => {
  const isTablet = useMedia('(min-width: 960px)')
  return (
    <div className={classNames(styles.Banner, className)}>
      <CarouselProvider
        naturalSlideWidth={isTablet ? 1000 : 500}
        naturalSlideHeight={500}
        totalSlides={desktopImages.length}
        isIntrinsicHeight
        isPlaying
        interval={5000}
        className={styles.Carousel}
      >
        <Slider moveThreshold={0.05} className={styles.Slider}>
          {isTablet &&
            desktopImages.map((img, i) => (
              <Slide key={`DesktopImage-${i}`} index={i}>
                <div className={styles.DesktopImage}>
                  <MemoImage image={img} ratio={1 / 4} />
                </div>
              </Slide>
            ))}
          {!isTablet &&
            mobileImages.map((img, i) => (
              <Slide key={`MobileImage-${i}`} index={i}>
                <div className={styles.MobileImage}>
                  <MemoImage image={img} ratio={1} />
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

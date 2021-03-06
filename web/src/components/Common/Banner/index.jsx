import React, { useEffect } from 'react'
import { array, string } from 'prop-types'
import classNames from 'classnames'
import Image from 'Primitive/Image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.css'
import styles from './Banner.module.scss'

const MemoImage = React.memo(Image)

const Banner = ({ desktopImages, mobileImages, className }) => {
  const hasNoMobileImages = !mobileImages || mobileImages.length === 0
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      
    },
    loop: true,
  })

  useEffect(() => {
    if(!instanceRef || desktopImages?.length <= 1) return
    const timeout = setTimeout(() => {
      instanceRef.current?.next()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [desktopImages, instanceRef])

  if (!desktopImages || desktopImages?.length === 0) return null
  return (
    <div className={classNames(styles.Banner, hasNoMobileImages, hasNoMobileImages && styles.desktopImagesOnMobile, className)}>
      <div ref={sliderRef} className={classNames('keen-slider', styles.Carousel)}>
        {desktopImages?.map((img, i) => (
          <div className={classNames('keen-slider__slide')} key={`DesktopImage-${i}`} index={i}>
            <div className={styles.DesktopImage}>
              <MemoImage image={img} ratio={1 / 4} />
            </div>
            {mobileImages[i] && (
              <div className={styles.MobileImage}>
                <MemoImage image={mobileImages[i]} ratio={1} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

Banner.propTypes = {
  desktopImages: array.isRequired,
  mobileImages: array.isRequired,
  className: string
}

export default Banner

import React, { useEffect, useState } from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel'
import useMedia from 'hooks/useMedia'
import classNames from 'classnames'
import Icon from 'Primitive/Icon'

import 'pure-react-carousel/dist/react-carousel.es.css'
import styles from './Carousel.module.scss'

const Carousel = (props) => {
  const [slidesPerPage, setSlidesPerPage] = useState(1)
  const isTablet = useMedia('(max-width: 960px)')
  const isPhone = useMedia('(max-width: 600px)')

  // Re-render carousel on page load
  // Fixes ssr not setting correct amount of slides
  useEffect(() => {
    setSlidesPerPage(isTablet ? (isPhone ? 1 : 2) : 3)
  }, [isPhone, isTablet, setSlidesPerPage])

  return (
    <CarouselProvider
      naturalSlideWidth={500}
      naturalSlideHeight={500}
      totalSlides={props.children.length}
      isIntrinsicHeight
      visibleSlides={slidesPerPage}
      dragStep={slidesPerPage}
      className={styles.Carousel}
    >
      <Slider moveThreshold={0.05} className={styles.Slider}>
        {props.children.map((child, i) => (
          <Slide key={`Slide-${i}`} className={styles.Slide} index={i}>
            {child}
          </Slide>
        ))}
      </Slider>
      <ButtonBack className={classNames(styles.Button, styles.Back)}>
        <Icon
          className={styles.ControlIcon}
          type="chevron-left"
          width={24}
          height={30}
          a11yText="Previous Slide"
        />
      </ButtonBack>
      <ButtonNext className={classNames(styles.Button, styles.Next)}>
        <Icon
          className={styles.ControlIcon}
          type="chevron-right"
          width={24}
          height={30}
          a11yText="Previous Slide"
        />
      </ButtonNext>
    </CarouselProvider>
  )
}
export default Carousel

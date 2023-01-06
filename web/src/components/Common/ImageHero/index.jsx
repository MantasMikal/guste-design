import React from 'react'
import PropTypes from 'prop-types'
import Image from 'Primitive/Image'
import styles from './ImageHero.module.scss'
import Type from 'Primitive/Type'
import Container from 'Primitive/Container'

function ImageHero({ desktopImage, mobileImage, title, description }) {
  return (
    <div className={styles.ImageHero}>
      <Image
        image={desktopImage}
        ratio={7 / 16}
        wrapperClassName={styles.DesktopImage}
      />
      <Image image={mobileImage} ratio={1} wrapperClassName={styles.MobileImage} />
      <Container size="medium" gutter center className={styles.Container}>
        <Type size="baseLarge" className={styles.Title}>
          {title}
        </Type>
        <Type size="base" className={styles.Description}>
          {description}
        </Type>
      </Container>
    </div>
  )
}

ImageHero.propTypes = {}

export default ImageHero

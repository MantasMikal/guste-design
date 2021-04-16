import React from 'react'
import { object, string } from 'prop-types'

import Type from 'Primitive/Type'
import Container from 'Primitive/Container'
import Image from 'Primitive/Image'

import styles from './Hero.module.scss'

const Hero = ({ heroImage, title, subtitle }) => {
  return (
    <div className={styles.Hero}>
      <Image image={heroImage} durationFadeIn={150} alt={title} />
      <div className={styles.Content}>
        <Container size="wide" gutter center>
          <Type size="display" as="h2" className={styles.Title}>
            {title}
          </Type>
          <Type size="subtitle" as="p" className={styles.Subtitle}>
            {subtitle}
          </Type>
        </Container>
      </div>
    </div>
  )
}

Hero.propTypes = {
  heroImage: object,
  title: string,
  subtitle: string
}

export default Hero

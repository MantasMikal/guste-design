import React from 'react'
import { string, object } from 'prop-types'
import classNames from 'classnames'

import Type from 'Primitive/Type'
import Image from 'Primitive/Image'
import Zoomable from 'Primitive/Zoomable'

import styles from './GalleryPostPreview.module.scss'
import PinterestPin from 'Primitive/PinterestPin'

const GalleryPostPreview = ({ mainImage, title, className }) => {
  return (
    <div className={classNames(styles.GalleryPostPreview, className)}>
      <Zoomable>
        <Image image={mainImage} alt={title} />
      </Zoomable>
      <PinterestPin
        slug="gallery"
        description={title}
        imageUrl={mainImage?.asset?.url}
        pinType="buttonPin"
        className={styles.PinterestPin}
      />
      <div className={styles.Details}>
        <Type as="h3" size="title" className={styles.Title}>
          {title}
        </Type>
      </div>
    </div>
  )
}

GalleryPostPreview.propTypes = {
  mainImage: object,
  title: string,
  className: string
}

export default GalleryPostPreview

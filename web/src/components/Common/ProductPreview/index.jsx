import React from 'react'
import { string, array } from 'prop-types'
import classNames from 'classnames'
import { getProductUrl } from 'libs/helpers'

import Type from 'Primitive/Type'
import SmartLink from 'Primitive/SmartLink'
import MultiImage from 'Common/MultiImage'

import styles from './ProductPreview.module.scss'

const ProductPreview = ({ images, title, handle, variants, className }) => {
  const { price } = variants[0]
  return (
    <SmartLink
      to={getProductUrl(handle)}
      className={classNames(styles.ProductPreview, className)}
    >
      <MultiImage images={images.slice(0, 2)} alt={title} size="square" />
      <Type size="base" className={styles.Details}>
        <h3 className={styles.Title}>
          {title}
        </h3>
        <div className={styles.Price}>{price}£</div>
      </Type>
    </SmartLink>
  )
}

ProductPreview.propTypes = {
  images: array.isRequired,
  title: string.isRequired,
  slug: string.isRequired,
  variants: array.isRequired,
  className: string
}

export default ProductPreview

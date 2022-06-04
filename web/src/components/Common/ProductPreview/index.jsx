import React from 'react'
import { string, array } from 'prop-types'
import classNames from 'classnames'
import { getProductUrl } from 'libs/helpers'
import shallow from 'zustand/shallow'
import Type from 'Primitive/Type'
import SmartLink from 'Primitive/SmartLink'
import MultiImage from 'Common/MultiImage'

import styles from './ProductPreview.module.scss'
import { FaHeart } from 'react-icons/fa'
import IconButton from 'Primitive/IconButton'
import { useStore } from '../../../store'

const ProductPreview = (props) => {
console.log("🚀 ~ file: index.jsx ~ line 16 ~ ProductPreview ~ props", props)
  const { id, media, title, handle, variants, className } = props
  const { price } = variants[0]
  const { toggleFavorite, doesExist } = useStore(state => state, shallow)
  const images = media?.map((img) => img?.preview?.image).filter(Boolean)
  console.log("🚀 ~ file: index.jsx ~ line 21 ~ ProductPreview ~ images", images)


  const handleClickFavorite = (e) => {
    e.preventDefault()
    toggleFavorite({
      id,
      images,
      title,
      handle,
      variants
    })
  }
  return (
    <SmartLink
      to={getProductUrl(handle)}
      className={classNames(styles.ProductPreview, className)}
    >
      <IconButton
        className={classNames(
          styles.ProductPreview,
          styles.HeartBtn,
          doesExist(id) && styles.favorite
        )}
        onClick={(e) => handleClickFavorite(e)}
        customIcon={<FaHeart size="2em" />}
      />
      <MultiImage images={images.slice(0, 2)} alt={title} layout="fullWidth" />
      <Type size="title" className={styles.Details}>
        <h3 className={styles.Title}>{title}</h3>
        <div className={styles.Price}>{price}£</div>
      </Type>
    </SmartLink>
  )
}

ProductPreview.propTypes = {
  images: array.isRequired,
  title: string.isRequired,
  handle: string.isRequired,
  variants: array.isRequired,
  className: string
}

export default ProductPreview

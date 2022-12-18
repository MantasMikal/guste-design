import React from 'react'
import { string, array } from 'prop-types'
import classNames from 'classnames'
import { getProductUrl } from 'libs/helpers'
import shallow from 'zustand/shallow'
import Type from 'Primitive/Type'
import SmartLink from 'Primitive/SmartLink'
import MultiImage from 'Common/MultiImage'
import { FaHeart } from 'react-icons/fa'
import IconButton from 'Primitive/IconButton'
import { useStore } from '../../../store'
import styles from './ProductPreview.module.scss'
import { getCurrencySymbol } from 'libs/helpers'

const ProductPreview = (props) => {
  const { id, media, title, handle, variants, className, priceRangeV2 } = props
  const { toggleFavorite, isFavorite } = useStore((state) => state, shallow)

  const images = media?.map((img) => img?.preview?.image).filter(Boolean)
  const priceMin = priceRangeV2?.minVariantPrice?.amount
  const priceMax = priceRangeV2?.maxVariantPrice?.amount
  const currencyCode = getCurrencySymbol(
    priceRangeV2.minVariantPrice.currencyCode
  )
  const formattedPrice =
    priceMax > priceMin
      ? `${priceMin}-${priceMax}${currencyCode}`
      : `${priceMin}${currencyCode}`

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
          isFavorite(id) && styles.favorite
        )}
        onClick={(e) => handleClickFavorite(e)}
        customIcon={<FaHeart size="2em" />}
      />
      <MultiImage images={images?.slice(0, 2)} alt={title} layout="fullWidth" />
      <Type size="title" className={styles.Details}>
        <h3 className={styles.Title}>{title}</h3>
        <div className={styles.Price}>{formattedPrice}</div>
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

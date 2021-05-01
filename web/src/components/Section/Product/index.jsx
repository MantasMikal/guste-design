import React from 'react'
import { array, object } from 'prop-types'

import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import PageTitle from 'Common/PageTitle'
import ProductPreview from 'Common/ProductPreview'

import styles from './Product.module.scss'
import ImageGallery from 'Common/ImageGallery'


/**
 * Product view
 */
const Product = ({ product, similarProducts }) => {
  console.log(
    '🚀 ~ file: index.jsx ~ line 18 ~ Product ~ similarProducts',
    similarProducts
  )
  const { title, images } = product

  return (
    <Container className={styles.Product} size="full" as="section">
      <PageTitle title={title} />
      <div className={styles.Wrapper}>
        <ImageGallery images={images} />
        <div></div>
      </div>
      <PageTitle title="Similar products" as="h3" />
      <div className={styles.SimilarProductGrid}>
        {similarProducts.map((product) => (
          <ProductPreview
            key={product.id}
            className={styles.ProductPreview}
            {...product}
          />
        ))}
      </div>
    </Container>
  )
}

Product.propTypes = {
  product: object,
  similarProducts: array
}

export default Product

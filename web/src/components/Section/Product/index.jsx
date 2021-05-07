import React from 'react'
import { array, object } from 'prop-types'

import Container from 'Primitive/Container'
import PageTitle from 'Common/PageTitle'
import ProductPreview from 'Common/ProductPreview'
import ProductDetails from 'Common/ProductDetails'
import CartButton from 'Common/CartButton'

import styles from './Product.module.scss'


/**
 * Product view
 */
const Product = ({ product, similarProducts }) => {
  const { title } = product
  return (
    <Container className={styles.Product} as="section">
      <PageTitle title={title}>
        <CartButton />
      </PageTitle>
      <ProductDetails product={product} className={styles.ProductDetails}/>
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

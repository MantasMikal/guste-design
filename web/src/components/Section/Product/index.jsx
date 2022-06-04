import React from 'react'
import { array, object } from 'prop-types'

import Container from 'Primitive/Container'
import PageTitle from 'Common/PageTitle'
import ProductPreview from 'Common/ProductPreview'
import ProductDetails from 'Common/ProductDetails'
import CartButton from 'Common/CartButton'
import BlockContent from 'Common/BlockContent'
import Stack from 'Primitive/Stack'

import styles from './Product.module.scss'


/**
 * Product view
 */
const Product = ({ product, similarProducts, page }) => {
  const { title } = product
  const { _rawInformation } = page
  return (
    <Container className={styles.Product} as="section">
      <PageTitle title={title}>
        <CartButton />
      </PageTitle>
      <ProductDetails product={product} className={styles.ProductDetails} />
      <Stack>
        {/* <PageTitle title="Information" as="h3" /> */}
        <BlockContent blocks={_rawInformation} />
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
      </Stack>
    </Container>
  )
}

Product.propTypes = {
  product: object,
  page: object,
  similarProducts: array
}

export default Product

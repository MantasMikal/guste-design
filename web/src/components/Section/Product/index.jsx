import React from 'react'
import { array, string } from 'prop-types'
import { mapEdgesToNodes } from 'libs/helpers'

import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import PageTitle from 'Common/PageTitle'
import GridLayout from 'Primitive/GridLayout'
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

  const similarProductNodes = similarProducts.map((product) => (
    <ProductPreview
      key={product.id}
      className={styles.ProductPreview}
      {...product}
    />
  ))

  return (
    <Container className={styles.Product} size="full" as="section">
      <PageTitle title={title} />
      <div className={styles.Wrapper}>
        <ImageGallery images={images} />
        <div></div>
      </div>
      <PageTitle title="Similar products" as="h3" />
      <GridLayout
        customGridClass={styles.SimilarProductGrid}
        items={similarProductNodes}
      />
    </Container>
  )
}

Product.propTypes = {
  title: string
}

export default Product

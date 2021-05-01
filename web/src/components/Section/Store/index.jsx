import React, { useState } from 'react'
import { array } from 'prop-types'

import ProductPreview from 'Common/ProductPreview'
import Container from 'Primitive/Container'
import GridLayout from 'Primitive/GridLayout'
import PageTitle from 'Common/PageTitle'
import CategoryPicker from 'Common/CategoryPicker'

import styles from './Store.module.scss'

const Store = ({ products }) => {
  const allCategories = ['All', ...getAllProductCategories(products)]
  const [activeCategory, setActiveCategory] = useState(allCategories[0])
  const filteredProducts =
    activeCategory === 'All'
      ? products
      : filterByCategory(products, activeCategory)
  
  const galleryNodes = filteredProducts.map((product) => (
    <ProductPreview
      key={product.id}
      className={styles.ProductPreview}
      {...product}
    />
  ))
  console.log("🚀 ~ file: index.jsx ~ line 29 ~ Store ~ filteredProducts", filteredProducts)
  const handleCategorySelect = (category) => {
    setActiveCategory(category)
  }

  return (
    <Container className={styles.Store} as="section">
      <div className={styles.Header}>
        <PageTitle title="Store" />
        <CategoryPicker
          className={styles.CategoryPicker}
          categories={allCategories}
          onClick={handleCategorySelect}
          activeCategory={activeCategory}
        />
      </div>
      <GridLayout customGridClass={styles.Grid} items={galleryNodes} />
    </Container>
  )
}

Store.propTypes = {
  products: array.isRequired
}

export default Store


const filterByCategory = (products, category) => {
  if (!category) return products
  let filteredProducts = []
  for (let i = 0; i < products.length; i++) {
    if (products[i].productType === category) filteredProducts.push(products[i])
  }

  return filteredProducts
}

const getAllProductCategories = (products) => {
  let categories = []
  for (let i = 0; i < products.length; i++) {
    let category = products[i].productType
    if (!categories.includes(category)) categories.push(category)
  }
  return categories
}

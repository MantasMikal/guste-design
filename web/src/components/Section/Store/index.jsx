import React, { useState, useEffect } from 'react'
import { array } from 'prop-types'
import { useQueryParam, StringParam } from 'use-query-params'

import ProductPreview from 'Common/ProductPreview'
import Container from 'Primitive/Container'
import GridLayout from 'Primitive/GridLayout'
import PageTitle from 'Common/PageTitle'
import CategoryPicker from 'Common/CategoryPicker'
import CartButton from 'Common/CartButton'

import styles from './Store.module.scss'

const MemoProductPreview = React.memo(ProductPreview)

const Store = ({ products }) => {
  const allCategories = ['All', ...getAllProductCategories(products)]
  const [activeCategory, setActiveCategory] = useState(allCategories[0])
  const [queryCat, setQueryCat] = useQueryParam('category', StringParam)
  useEffect(() => {
    setActiveCategory(queryCat || allCategories[0])
  })

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : filterByCategory(products, activeCategory)

  const galleryNodes = filteredProducts.map((product) => (
    <MemoProductPreview
      key={product.id}
      className={styles.ProductPreview}
      {...product}
    />
  ))

  const handleCategorySelect = (category) => {
    setActiveCategory(category)
    const nextActiveFilter = category !== queryCat ? category : null
    setQueryCat(nextActiveFilter)
    setActiveCategory(nextActiveFilter)
    typeof window !== 'undefined' &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
  }

  return (
    <Container className={styles.Store} as="section">
      <div className={styles.Header}>
        <PageTitle title="Store" />
        <div className={styles.FloatingControls}>
          <CartButton className={styles.CartButton} />
          <CategoryPicker
            className={styles.CategoryPicker}
            categories={allCategories}
            onClick={handleCategorySelect}
            activeCategory={activeCategory}
          />
        </div>
      </div>
      <GridLayout customGridClass={styles.Grid} items={galleryNodes} />
    </Container>
  )
}

Store.propTypes = {
  products: array.isRequired
}

export default Store

/**
 * Filters products by category
 * @param {Object} products 
 * @param {String} category 
 * @returns filtered products
 */
const filterByCategory = (products, category) => {
  if (!category) return products
  let filteredProducts = []
  for (let i = 0; i < products.length; i++) {
    if (products[i].productType === category) filteredProducts.push(products[i])
  }

  return filteredProducts
}

/**
 * Collects categories from products
 * @param {Object} products 
 * @returns 
 */
const getAllProductCategories = (products) => {
  let categories = []
  for (let i = 0; i < products.length; i++) {
    let category = products[i].productType
    if (!categories.includes(category)) categories.push(category)
  }
  return categories
}

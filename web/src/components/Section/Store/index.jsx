import React, { useState, useEffect } from 'react'
import { array } from 'prop-types'
import { useQueryParam, StringParam } from 'use-query-params'
import { useMemo } from 'react'
import ProductPreview from 'Common/ProductPreview'
import Container from 'Primitive/Container'
import GridLayout from 'Primitive/GridLayout'
import PageTitle from 'Common/PageTitle'
import CategoryPicker from 'Common/CategoryPicker'
import CartButton from 'Common/CartButton'

import styles from './Store.module.scss'
import IconButton from 'Primitive/IconButton'
import { FaHeart } from 'react-icons/fa'
import { TbColumns1, TbColumns2 } from "react-icons/tb";
import BlockContent from 'Common/BlockContent'
import classNames from 'classnames'


const Store = ({ products, page }) => {
  const { banner, _rawBody } = page
  const allCategories = useMemo(
    () => ['All', ...getAllProductCategories(products)],
    [products]
  )
  const [activeCategory, setActiveCategory] = useState(allCategories[0])
  const [isGridView, setIsGridView] = useState(false)
  const [queryCat, setQueryCat] = useQueryParam('category', StringParam)

  useEffect(() => {
    setActiveCategory(queryCat || allCategories[0])
  }, [queryCat, allCategories])

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : filterByCategory(products, activeCategory)

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
          <div className={styles.ControlsWrapper}>
            <IconButton
              className={styles.GridToggle}
              small
              onClick={() => setIsGridView(!isGridView)}
              customIcon={isGridView ? <TbColumns1 size="1em" /> : <TbColumns2 size="1em" />}
            />
            <IconButton
              small
              className={styles.Favorites}
              customIcon={<FaHeart size="1em" />}
              to="/favorites"
            />
            <div className={styles.Cart}>
              <CartButton className={styles.CartButton} />
            </div>
          </div>
          <CategoryPicker
            className={styles.CategoryPicker}
            categories={allCategories}
            onClick={handleCategorySelect}
            activeCategory={activeCategory}
          />
        </div>
      </div>
      {_rawBody && !queryCat && <BlockContent blocks={_rawBody} />}
      <PageTitle title={activeCategory === 'All' ? 'All products' : activeCategory} />
      <GridLayout
        customGridClass={classNames(styles.Grid, {
          [styles.MobileGrid]: isGridView
        })}
        items={filteredProducts.map((product) => (
          <ProductPreview
            key={product.id}
            className={styles.ProductPreview}
            {...product}
          />
        ))}
      />
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

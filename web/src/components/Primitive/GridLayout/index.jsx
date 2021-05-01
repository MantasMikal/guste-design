import React, { useState } from 'react'
import { array, number } from 'prop-types'
import LazyLoader from 'libs/lazy-loader/lazyLoader'
import styles from './GridLayout.module.scss'

/**
 * Basic grid layout with lazy loading.
 */
const GridLayout = ({
  items,
  threshold,
  loadAmount = 10,
  initialAmountToLoad = 10,
  customGridClass
}) => {
  const [loaded, setLoaded] = useState(initialAmountToLoad)
  const [hasMore, setHasMore] = useState(true)

  const loadMore = () => {
    const itemsLeft = items.length - loaded
    const totalAmount = loaded + loadAmount

    if (itemsLeft > 0) {
      setLoaded(totalAmount)
      setHasMore(true)
    } else {
      setHasMore(false)
    }
  }

  const displayedItems = []
  for (let i = 0; i < loaded; i++) {
    items[i] && displayedItems.push(items[i])
  }

  return (
    <LazyLoader threshold={threshold} loadMore={loadMore} hasMore={hasMore}>
      <div className={customGridClass || styles.Grid}>{displayedItems}</div>
    </LazyLoader>
  )
}

GridLayout.propTypes = {
  items: array.isRequired,
  /**
   * Number of items to load after threshold is reached
   */
  loadAmount: number,
  /** Number of items to load initially */
  initialAmountToLoad: number,
  /**
   * % of the page to scroll to load more items (0.1 - 1)
   */
  threshold: number
}

export default GridLayout

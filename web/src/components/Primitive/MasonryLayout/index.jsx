import React, { useState } from 'react'
import { array, number, shape } from 'prop-types'
import LazyLoader from 'libs/lazy-loader/lazyLoader'
import MasonryLayout from 'libs/masonry/masonry-layout'

/**
 * Basic masnory layout with lazy loading.
 */
const Masonry = ({
  items,
  gap,
  widths,
  threshold,
  loadAmount = 10,
  initialAmountToLoad = 10
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
      <MasonryLayout gap={gap} widths={widths}>
        {displayedItems}
      </MasonryLayout>
    </LazyLoader>
  )
}

Masonry.propTypes = {
  items: array.isRequired,
  /**
   * Column margin in px
   */
  gap: number,
  /**
   * Number of items to load after threshold is reached
   */
  loadAmount: number,
  /** Number of items to load initially */
  initialAmountToLoad: number,
  /**
   * % of the page to scroll to load more items (0.1 - 1)
   */
  threshold: number,
  /**
   * Items per row for different screen sizes
   */
  widths: shape({
    desktop: number,
    tablet: number,
    mobile: number
  })
}

export default Masonry

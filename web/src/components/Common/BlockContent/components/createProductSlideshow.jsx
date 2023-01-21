import PageTitle from 'Common/PageTitle'
import ProductSlideshow from 'Common/ProductSlideshow'
import ProjectSlideshow from 'Common/ProjectSlideshow'
import React from 'react'

const createProductSlideshow = (component) => {
  if (!component) return null
  const { products, title } = component || {}
  if (!products) return null

  return (
    <div style={{ marginBottom: '8px' }}>
      {title && <PageTitle title={title} />}
      <ProductSlideshow products={products} />
    </div>
  )
}

export default createProductSlideshow

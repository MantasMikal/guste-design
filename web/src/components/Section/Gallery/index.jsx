import React, { useState } from 'react'
import { array } from 'prop-types'
import { getAllPostCategories } from 'libs/helpers'

import GalleryPostPreview from 'Common/GalleryPostPreview'
import Container from 'Primitive/Container'
import MasonryLayout from 'Primitive/MasonryLayout'
import PageTitle from 'Common/PageTitle'
import CategoryPicker from 'Common/CategoryPicker'

import styles from './Gallery.module.scss'

const Gallery = ({ posts }) => {
  const allCategories = getAllPostCategories(posts)
  const [activeCategory, setActiveCategory] = useState(allCategories[0])
  const galleryNodes = posts.map((post) => (
    <GalleryPostPreview
      key={post.id}
      className={styles.GalleryPostPreview}
      {...post}
    />
  ))

  const handleCategorySelect = (category) => {
    setActiveCategory(category)
  }

  return (
    <Container className={styles.Gallery} as="section">
      <div className={styles.Header}>
        <PageTitle title="Gallery" />
        <CategoryPicker
          className={styles.CategoryPicker}
          categories={allCategories}
          onClick={handleCategorySelect}
          activeCategory={activeCategory}
        />
      </div>
      <MasonryLayout items={galleryNodes} gap={10} />
    </Container>
  )
}

Gallery.propTypes = {
  posts: array.isRequired
}

export default Gallery

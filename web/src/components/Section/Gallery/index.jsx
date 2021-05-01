import React, { useState } from 'react'
import { array } from 'prop-types'
import { getAllPostCategories } from 'libs/helpers'

import GalleryPostPreview from 'Common/GalleryPostPreview'
import Container from 'Primitive/Container'
import MasonryLayout from 'Primitive/MasonryLayout'
import PageTitle from 'Common/PageTitle'
import CategoryPicker from 'Common/CategoryPicker'

import styles from './Gallery.module.scss'

const filterByCategory = (posts, category) => {
  if (!category) return posts
  let filteredPosts = []
  for (let i = 0; i < posts.length; i++) {
    for (let j = 0; j < posts[i].categories.length; j++) {
      let postCategory = posts[i].categories[j].title
      if (postCategory === category) filteredPosts.push(posts[i])
    }
  }

  return filteredPosts
}

const Gallery = ({ posts }) => {
  const allCategories = ['All', ...getAllPostCategories(posts)]
  const [activeCategory, setActiveCategory] = useState(allCategories[0])
  const filteredPosts = activeCategory === 'All' ? posts : filterByCategory(posts, activeCategory)
  const galleryNodes = filteredPosts.map((post) => (
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

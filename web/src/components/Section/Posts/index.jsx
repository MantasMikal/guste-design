import React, { useState, useEffect } from 'react'
import { array } from 'prop-types'
import { useQueryParam, StringParam } from 'use-query-params'
import { useMemo } from 'react'
import CategoryPicker from 'Common/CategoryPicker'
import PostPreview from 'Common/PostPreview'
import Container from 'Primitive/Container'
import GridLayout from 'Primitive/GridLayout'
import PageTitle from 'Common/PageTitle'

import styles from './Posts.module.scss'

const Posts = ({ posts }) => {
  const allCategories = useMemo(
    () => ['All', ...getAllUniquePostsCategories(posts)],
    [posts]
  )
  const [activeCategory, setActiveCategory] = useState(allCategories[0])
  const [queryCat, setQueryCat] = useQueryParam('category', StringParam)

  useEffect(() => {
    setActiveCategory(queryCat || allCategories[0])
  }, [queryCat, allCategories])

  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : filterByCategory(posts, activeCategory)

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

  const postNodes = filteredPosts.map((post) => (
    <PostPreview
      key={post.id}
      className={styles.PostPreview}
      surround
      {...post}
    />
  ))

  return (
    <Container className={styles.Root} as="section">
      <div className={styles.Header}>
        <PageTitle title="Posts" />
        <div className={styles.FloatingControls}>
          <CategoryPicker
            className={styles.CategoryPicker}
            categories={allCategories}
            onClick={handleCategorySelect}
            activeCategory={activeCategory}
          />
        </div>
      </div>

      <GridLayout items={postNodes} customGridClass={styles.Grid} />
    </Container>
  )
}

Posts.propTypes = {
  posts: array.isRequired
}

export default Posts

/**
 * Filters posts by category
 * @param {Object} posts
 * @param {String} category
 * @returns filtered posts
 */
const filterByCategory = (posts, category) => {
  if (!category) return posts
  let filteredPosts = []
  for (let i = 0; i < posts.length; i++) {
    const postCategories = posts[i].categories
    postCategories &&
      postCategories.forEach((projCategory) => {
        if (projCategory.title === category) filteredPosts.push(posts[i])
      })
  }
  return filteredPosts
}

/**
 * Collects categories from posts
 * @param {Object} posts
 * @returns {Array}
 */
const getAllUniquePostsCategories = (posts) => {
  let uniqueCategories = []
  for (let i = 0; i < posts.length; i++) {
    const categories = getAllPostCategories(posts[i])
    categories.forEach((category) => {
      if (!uniqueCategories.includes(category)) uniqueCategories.push(category)
    })
  }
  return uniqueCategories
}

/**
 * Collects all categories from post
 * @param {Object} post
 * @returns {Array}
 */
const getAllPostCategories = (post) => {
  const postCategories = post && post.categories
  if (!postCategories) return []
  let categories = []
  for (let i = 0; i < postCategories.length; i++) {
    let category = postCategories[i].title
    if (!categories.includes(category)) categories.push(category)
  }
  return categories
}

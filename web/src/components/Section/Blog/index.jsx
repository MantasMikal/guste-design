import React from 'react'
import { array } from 'prop-types'

import BlogPostPreview from 'Common/BlogPostPreview'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import MasonryLayout from 'Primitive/MasonryLayout'

import styles from './Blog.module.scss'

const Blog = ({ blogNodes }) => {
  const blogPosts = blogNodes.map((post) => (
    <BlogPostPreview
      key={post.id}
      className={styles.BlogPostPreview}
      surround
      {...post}
    />
  ))

  return (
    <Container
      className={styles.Root}
      size="wide"
      center
      gutter
      spacious
      withNavSpace
      as="section"
    >
      <Type as="h1" size="display" className={styles.Title}>
        Blog
      </Type>
      <MasonryLayout items={blogPosts} gap={25} />
    </Container>
  )
}

Blog.propTypes = {
  blogNodes: array.isRequired
}

export default Blog

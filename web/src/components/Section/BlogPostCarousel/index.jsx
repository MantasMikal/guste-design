import React from 'react'
import { string, object, array, arrayOf, shape } from 'prop-types'

import Carousel from 'Primitive/Carousel'
import BlogPostPreview from 'Common/BlogPostPreview'
import Container from 'Primitive/Container'
import SmartLink from 'Primitive/SmartLink'
import Type from 'Primitive/Type'

import styles from './BlogPostCarousel.module.scss'

const BlogPostCarousel = ({ postNodes, title }) => {
  return (
    <section className={styles.BlogPostCarousel}>
      <Container size="wide" center gutter spacious hideOverflow>
        <Type size="display" as="h2" className={styles.Title}>
          {title}
        </Type>
        <SmartLink to="/blog/" className={styles.ViewAll}>
          <Type as="span" size="subtitle">
            VIEW ALL
          </Type>
        </SmartLink>
        <Carousel>
          {postNodes &&
            postNodes.map((node) => (
              <BlogPostPreview key={node.id} {...node} surround />
            ))}
        </Carousel>
      </Container>
    </section>
  )
}

BlogPostCarousel.propTypes = {
  postNodes: arrayOf(
    shape({
      slug: object,
      mainImage: object,
      title: string,
      publishedAt: string,
      _rawExcerpt: array
    })
  )
}

export default BlogPostCarousel

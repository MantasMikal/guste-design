import React from 'react'
import { array } from 'prop-types'

import Image from 'Primitive/Image'
import SmartLink from 'Primitive/SmartLink'

import styles from './InstagramPosts.module.scss'
import PageTitle from 'Common/PageTitle'
import Container from 'Primitive/Container'

const InstagramPosts = ({ posts }) => {
  if (!posts || posts.length === 0) return null
  return (
    <Container as="section">
      <PageTitle title="Instagram" as="h3" />
      <div className={styles.InstagramPosts}>
        {posts.map((post, i) => (
          <SmartLink
            key={`InstagramPost-${i}`}
            className={styles.InstagramPost}
            href="https://instagram.com/guste.design"
          >
            <Image image={post} ratio={1} alt={post.caption} />
          </SmartLink>
        ))}
      </div>
    </Container>
  )
}

InstagramPosts.propTypes = {
  posts: array
}

export default InstagramPosts

import React from 'react'
import { array, object } from 'prop-types'

import BlockContent from 'Common/BlockContent'
import Container from 'Primitive/Container'
import Image from 'Primitive/Image'
import PageTitle from 'Common/PageTitle'
import SmartLink from 'Primitive/SmartLink'

import styles from './Services.module.scss'

/**
 * Services page
 */
const Services = ({ _rawBody, _rawBio, mainImage, instagramPosts }) => {
  return (
    <Container className={styles.Services} as="section">
      <PageTitle title="Services" />
      <div className={styles.Body}>
        <BlockContent blocks={_rawBody} />
      </div>
      <PageTitle title="Instagram" as="h3" />
      <div className={styles.InstagramPosts}>
        {instagramPosts &&
          instagramPosts.length > 0 &&
          instagramPosts.map((post, i) => (
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

Services.propTypes = {
  _rawBody: array,
  _rawBio: array,
  instagramPosts: array,
  mainImage: object
}

export default Services

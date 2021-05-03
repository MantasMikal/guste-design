import React from 'react'
import { array, object } from 'prop-types'

import BlockContent from 'Common/BlockContent'
import Container from 'Primitive/Container'
import Image from 'Primitive/Image'

import styles from './About.module.scss'
import PageTitle from 'Common/PageTitle'
import SmartLink from 'Primitive/SmartLink'

/**
 * About page
 */
const About = ({ _rawBody, _rawBio, mainImage, instagramPosts }) => {
  return (
    <Container className={styles.About} as="section">
      <PageTitle title="About" />
      <div className={styles.Bio}>
        <Image className={styles.BioImage} image={mainImage} />
        <div className={styles.BioText}>
          <BlockContent blocks={_rawBio} />
        </div>
      </div>
      <BlockContent className={styles.Body} blocks={_rawBody} />
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
              <Image image={post} alt={post.caption} />
            </SmartLink>
          ))}
      </div>
    </Container>
  )
}

About.propTypes = {
  _rawBody: array,
  _rawBio: array,
  instagramPosts: array,
  mainImage: object
}

export default About

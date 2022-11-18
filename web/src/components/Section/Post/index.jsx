import React from 'react'
import { string, object } from 'prop-types'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import PageTitle from 'Common/PageTitle'
import Container from 'Primitive/Container'
import BlockContent from 'Common/BlockContent'
import SmartLink from 'Primitive/SmartLink'
import MultiImage from 'Common/MultiImage'

import styles from './Post.module.scss'

const Post = ({ title, mainImages, _rawBody, prev, next }) => {
  console.log('🚀 ~ file: index.jsx ~ line 14 ~ Post ~ mainImages', mainImages)
  return (
    <Container as="section" className={styles.Post}>
      {/* <PageTitle title={title} /> */}
      <div className={styles.Hero}>
        <MultiImage
          className={styles.MultiImage}
          ratio={4 / 16}
          images={mainImages}
        />
      </div>
      <div className={styles.Content}>
        <BlockContent className={styles.Body} blocks={_rawBody} />
        <div className={styles.Navigation}>
          {prev && (
            <SmartLink to={prev.url}>
              <IoIosArrowBack /> Previous
            </SmartLink>
          )}
          {next && (
            <SmartLink to={next.url}>
              Next <IoIosArrowForward />
            </SmartLink>
          )}
        </div>
      </div>
    </Container>
  )
}

Post.propTypes = {
  title: string,
  _rawBody: object,
  prev: object,
  next: object
}

export default Post

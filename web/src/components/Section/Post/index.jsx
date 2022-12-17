import React from 'react'
import { string, object } from 'prop-types'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import Container from 'Primitive/Container'
import BlockContent from 'Common/BlockContent'
import SmartLink from 'Primitive/SmartLink'
import MultiImage from 'Common/MultiImage'

import styles from './Post.module.scss'
import Type from 'Primitive/Type'
import { formatDate } from 'libs/helpers'

const Post = ({ title, mainImages, readTime, publishedAt, _rawBody, prev, next }) => {
  return (
    <Container as="section" className={styles.Post}>
      <div className={styles.Hero}>
        <MultiImage
          className={styles.MultiImage}
          ratio={5 / 16}
          images={mainImages}
        />
      </div>
      <div className={styles.PostWrapper}>
        <div className={styles.Intro}>
          <Container className={styles.Sell} center size="prose">
            <Type as="h1" className={styles.Title} size="baseLarge">
              {title}
            </Type>
            <div className={styles.InfoWrapper}>
              <Type className={styles.InfoText} size="small">
                {formatDate(publishedAt)}
              </Type>

              <Type className={styles.InfoText} size="small">
                {readTime || 5} min read
              </Type>
            </div>
          </Container>
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

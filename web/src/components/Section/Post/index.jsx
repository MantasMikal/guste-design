import React from 'react'
import { string, object } from 'prop-types'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import PageTitle from 'Common/PageTitle'
import Container from 'Primitive/Container'
import BlockContent from 'Common/BlockContent'
import SmartLink from 'Primitive/SmartLink'
import MultiImage from 'Common/MultiImage'

import styles from './Post.module.scss'
import Type from 'Primitive/Type'

const Post = ({ title, mainImages, _rawBody, prev, next }) => {
  return (
    <Container as="section" className={styles.Post}>
      <div className={styles.Hero}>
        <MultiImage
          className={styles.MultiImage}
          ratio={4 / 16}
          images={mainImages}
        />
      </div>
      <div className={styles.Content}>
        <Type className={styles.Title} size="baseLarge">{title}</Type>
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

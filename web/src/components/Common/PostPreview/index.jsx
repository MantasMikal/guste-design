import React from 'react'
import { string, object, array, bool } from 'prop-types'
import { Link } from 'gatsby'
import { getPostUrl } from 'libs/helpers'
import classNames from 'classnames'

import Type from 'Primitive/Type'
import MultiImage from 'Common/MultiImage'

import styles from './PostPreview.module.scss'

const PostPreview = ({ slug, description, mainImages, title, className }) => {
  return (
    <Link
      className={classNames(styles.PostPreview, className)}
      to={getPostUrl(slug.current)}
    >
      <MultiImage ratio={9 / 16} images={mainImages} alt={title} width={1000} />
      <div className={styles.Details}>
        <Type as="h3" size="title" className={styles.Title}>
          {title}
        </Type>
        {description && (
          <Type as="p" size="small" className={styles.Description}>
            {description}
          </Type>
        )}
      </div>
    </Link>
  )
}

PostPreview.propTypes = {
  slug: object,
  mainImages: array,
  title: string,
  publishedAt: string,
  excerpt: array,
  surround: bool,
  className: string
}

export default PostPreview

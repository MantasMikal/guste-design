import React from 'react'
import { string, object, array, bool } from 'prop-types'
import { Link } from 'gatsby'
import { formatDate, getPostUrl } from 'libs/helpers'
import classNames from 'classnames'

import Type from 'Primitive/Type'
import MultiImage from 'Common/MultiImage'

import styles from './PostPreview.module.scss'

const PostPreview = ({
  slug,
  description,
  mainImages,
  title,
  categories,
  publishedAt,
  className,
  ...props
}) => {
  console.log('🚀 ~ file: index.jsx:13 ~ PostPreview ~ props', props)
  const mainCategory = categories[0].title
  return (
    <Link
      className={classNames(styles.PostPreview, className)}
      to={getPostUrl(slug.current)}
    >
      <div className={styles.ImageWrapper}>
        <MultiImage
          ratio={9 / 16}
          images={mainImages}
          alt={title}
          width={1000}
        />
        <Type size="small" className={styles.Category}>
          #{mainCategory}
        </Type>
      </div>
      <div className={styles.Details}>
        <dic className={styles.Header}>
        <Type as="h3" size="title" className={styles.Title}>
          {title}
        </Type>
        <Type size="tiny" className={styles.Date}>{formatDate(publishedAt)}</Type>
        </dic>
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

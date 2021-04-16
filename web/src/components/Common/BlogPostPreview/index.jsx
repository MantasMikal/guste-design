import React from 'react'
import { string, object, array, bool } from 'prop-types'
import { Link } from 'gatsby'
import { getBlogUrl, formatDate } from 'libs/helpers'
import classNames from 'classnames'

import BlockText from 'Common/BlockText'
import Type from 'Primitive/Type'
import Image from 'Primitive/Image'
import Badge from 'Primitive/Badge'

import styles from './BlogPostPreview.module.scss'

const BlogPostPreview = ({
  slug,
  mainImage,
  title,
  publishedAt,
  excerpt,
  ratio,
  surround,
  className,
  category
}) => {
  return (
    <Link
      className={classNames(
        styles.Root,
        surround && styles.surround,
        className
      )}
      to={getBlogUrl(slug.current)}
    >
      <div className={styles.LeadMediaThumb}>
        <Image ratio={ratio || undefined} image={mainImage} alt={title} />
      </div>
      <Type as="h3" size="title" className={styles.Title}>
        {title}
      </Type>
      {excerpt && (
        <div className={styles.Excerpt}>
          <BlockText blocks={excerpt} />
        </div>
      )}
      <div className={styles.Details}>
        <Type size="small" as="time" className={styles.Date}>
          {formatDate(publishedAt)}
        </Type>
      </div>
      <div className={styles.CategoryWrapper}>
        {category &&
          category.length > 0 &&
          category.map((cat) => (
            <Badge
              content={cat.title}
              key={`Cat-${title}-${cat.title}`}
              color={cat.color.hex}
            />
          ))}
      </div>
    </Link>
  )
}

BlogPostPreview.propTypes = {
  slug: object,
  mainImage: object,
  title: string,
  publishedAt: string,
  excerpt: array,
  surround: bool,
  className: string
}

export default BlogPostPreview

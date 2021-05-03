import React from 'react'
import { string, object, array, bool } from 'prop-types'
import { Link } from 'gatsby'
import { getProjectUrl } from 'libs/helpers'
import classNames from 'classnames'

import Type from 'Primitive/Type'
import MultiImage from 'Common/MultiImage'

import styles from './ProjectPreview.module.scss'

const ProjectPreview = ({ slug, mainImages, title, className }) => {
  return (
    <Link
      className={classNames(styles.ProjectPreview, className)}
      to={getProjectUrl(slug.current)}
    >
      <MultiImage images={mainImages} alt={title} />
      <div className={styles.Details}>
        <Type as="h3" size="title" className={styles.Title}>
          {title}
        </Type>
      </div>
    </Link>
  )
}

ProjectPreview.propTypes = {
  slug: object,
  mainImages: array,
  title: string,
  publishedAt: string,
  excerpt: array,
  surround: bool,
  className: string
}

export default ProjectPreview

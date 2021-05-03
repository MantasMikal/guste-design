import React from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'

import Type from 'Primitive/Type'

import styles from './PageTitle.module.scss'

const PageTitle = ({ title, children, as, className }) => (
  <div className={classNames(styles.PageTitle, className)}>
    <Type as={as || 'h2'} size="titleMedium">
      {title}
    </Type>
    <div className={styles.Nav}>{children}</div>
  </div>
)

PageTitle.propTypes = {
  title: string.isRequired,
  as: string,
  className: string
}

export default PageTitle

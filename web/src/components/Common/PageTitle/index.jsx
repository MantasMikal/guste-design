import React from 'react'
import { string } from 'prop-types'

import Type from 'Primitive/Type'

import styles from './PageTitle.module.scss'

const PageTitle = ({ title, as }) => (
  <div className={styles.PageTitle}>
    <Type as={as || "h2"} size="title">
      {title}
    </Type>
  </div>
)

PageTitle.propTypes = {
  title: string.isRequired,
  as: string
}

export default PageTitle

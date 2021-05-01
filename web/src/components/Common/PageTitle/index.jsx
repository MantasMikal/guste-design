import React from 'react'
import { string } from 'prop-types'

import Type from 'Primitive/Type'

import styles from './PageTitle.module.scss'

const PageTitle = ({ title }) => (
  <div className={styles.PageTitle}>
    <Type as="h2" size="title">
      {title}
    </Type>
  </div>
)

PageTitle.propTypes = {
  title: string.isRequired
}

export default PageTitle

import React from 'react'
import { node } from 'prop-types'

import styles from './CheckControlText.module.scss'

const CheckControlText = ({ children }) => {
  return <div className={styles.CheckControlText}>{children}</div>
}

CheckControlText.propTypes = {
  children: node.isRequired
}

export default CheckControlText

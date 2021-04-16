import React from 'react'
import { node } from 'prop-types'

import styles from './Example.module.scss'
/**
 * Starter component which can be duplicated and used as a starting point
 * for others.

 * Use this first story to add documentation and show off the most
 * interesting/useful component iteration. Use subsequent stories to detail
 * all component permutations.
 */
const Example = ({ children }) => (
  <div className={styles.Example}>{children}</div>
)

Example.propTypes = {
  children: node.isRequired
}

export default Example

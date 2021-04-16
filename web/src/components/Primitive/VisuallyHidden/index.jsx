import React from 'react'
import { node } from 'prop-types'

import styles from './VisuallyHidden.module.scss'
/**
 * Note: nothing is visible in the above preview – it’s intentionally
 * visually hidden…

 * Hides content using CSS without using \`display: none\`.
 * This means screen-readers/bots can still access the content.

 * This is useful for adding hidden labels/descriptions to icons or other
 * visual elements which might benefit screen-reader users.`
 */
const VisuallyHidden = ({ children }) => (
  <span className={styles.VisuallyHidden}>{children}</span>
)

VisuallyHidden.propTypes = {
  children: node.isRequired
}

export default VisuallyHidden

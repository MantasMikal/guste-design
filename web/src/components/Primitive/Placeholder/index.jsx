import React from 'react'
import { node, number, oneOfType, string } from 'prop-types'

import styles from './Placeholder.module.scss'

const Placeholder = ({ children, height, size, width }) => (
  <div
    className={styles.Placeholder}
    style={{ width: width || size, height: height || size }}
  >
    <svg className={styles.PlaceholderSvg}>
      <line x1="0" y1="0" x2="100%" y2="100%" />
      <line x1="100%" y1="0" x2="0" y2="100%" />
    </svg>
    {children && (
      <div className={styles.PlaceholderContent}>
        <div className={styles.PlaceholderContentInner}>{children}</div>
      </div>
    )}
  </div>
)

Placeholder.propTypes = {
  children: node,
  height: oneOfType([number, string]),
  size: oneOfType([number, string]),
  width: oneOfType([number, string])
}

export default Placeholder

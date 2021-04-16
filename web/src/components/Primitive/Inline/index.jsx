import React from 'react'
import classNames from 'classnames'
import { bool, node, oneOf } from 'prop-types'

import styles from './Inline.module.scss'

/**
 *  A wrapper component which evenly horizontally spaces its children.
 */
const Inline = ({ children, gap, shrink }) => (
  <div
    className={classNames(
      styles.Inline,
      gap && styles[gap],
      shrink && styles.shrink
    )}
  >
    {children}
  </div>
)

Inline.defaultProps = {
  gap: 'medium'
}

Inline.propTypes = {
  children: node.isRequired,
  gap: oneOf(['small', 'medium', 'large']),
  shrink: bool
}

export default Inline

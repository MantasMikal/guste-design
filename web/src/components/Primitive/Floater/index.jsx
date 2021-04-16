import React from 'react'
import { node, oneOf } from 'prop-types'
import classNames from 'classnames'

import styles from './Floater.module.scss'

/**
 * A wrapper which optionally floats children left/right, with options to
 * constrain content width. Useful for floating images/video within article
 * text content.
 */
const Floater = ({ align, children, size }) => (
  <div
    className={classNames(
      styles.Floater,
      align && styles[align],
      size && styles[size]
    )}
  >
    {children}
  </div>
)

Floater.propTypes = {
  align: oneOf(['left', 'right']),
  children: node.isRequired,
  size: oneOf(['small', 'medium', 'full'])
}

export default Floater

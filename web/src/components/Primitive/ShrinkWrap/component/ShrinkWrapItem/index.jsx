import React from 'react'
import classNames from 'classnames'
import { bool, node, oneOf } from 'prop-types'

import styles from './ShrinkWrapItem.module.scss'

const ShrinkWrapItem = ({ children, noWrap, shrink, spacing, vAlign }) => (
  <span
    className={classNames(
      styles.ShrinkWrapItem,
      noWrap && styles.noWrap,
      shrink && styles.shrink,
      spacing && styles[spacing],
      vAlign && styles[vAlign]
    )}
  >
    {children}
  </span>
)

ShrinkWrapItem.displayName = 'ShrinkWrapItem'

ShrinkWrapItem.propTypes = {
  children: node.isRequired,
  shrink: bool,
  noWrap: bool,
  spacing: oneOf(['comfortable', 'none']),
  vAlign: oneOf(['top', 'middle', 'bottom'])
}

export default ShrinkWrapItem

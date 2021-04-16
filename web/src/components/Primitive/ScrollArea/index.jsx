import React from 'react'
import classNames from 'classnames'
import { bool, node } from 'prop-types'

import styles from './ScrollArea.module.scss'

/** 
 * A scrollable container which takes the dimensions of its parent element
 * (fixed-height, or flex-based), ands scrolls its content.

 *  Has a horizontal variation, as well as an (experimental) prop which
 * attempts to visually hide the scrollbar. This is only recommended if
 *  you are also providing a custom visual indicator of scroll position.
*/
const ScrollArea = ({ hideScrollbar, horizontal, children }) => (
  <div
    className={classNames(
      styles.ScrollArea,
      hideScrollbar && styles.hideScrollbar,
      horizontal ? styles.horizontal : styles.vertical
    )}
  >
    {children}
  </div>
)

ScrollArea.propTypes = {
  hideScrollbar: bool,
  horizontal: bool,
  children: node.isRequired
}

export default ScrollArea

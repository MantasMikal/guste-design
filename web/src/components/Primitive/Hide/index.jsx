import React from 'react'
import { node, oneOf, string } from 'prop-types'
import classNames from 'classnames'

import styles from './Hide.module.scss'

export const widths = ['tablet', 'desktop']

/**
 * A primitive method of visually showing/hiding content using pre-defined
 * breakpoints to hide content. Uses \`display: none\`, so all markup still
 * appears in the DOM - good enough for current basic needs, but
 * accessibility should be considered for each use.

 * For more robust Media conditional rendering, look at something like:
 * https://github.com/ReactTraining/react-media
 */
const Hide = ({ as, at, below, children }) => {
  const HideEl = as

  return (
    <HideEl
      as={as}
      className={classNames(
        styles.Hide,
        at && styles[`at-${at}`],
        below && styles[`below-${below}`]
      )}
    >
      {children}
    </HideEl>
  )
}

Hide.defaultProps = {
  as: 'div'
}

Hide.propTypes = {
  as: string,
  at: oneOf(widths),
  below: oneOf(widths),
  children: node.isRequired
}

export default Hide

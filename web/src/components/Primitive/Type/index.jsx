import React from 'react'
import { bool, node, oneOf, string } from 'prop-types'
import classNames from 'classnames'

import styles from './Type.module.scss'

import Element from '../Element'

export const sizes = [
  'display',
  'menu',
  'title',
  'titleMedium',
  'titleLarge',
  'subtitle',
  'baseLarge',
  'baseSmall',
  'base',
  'small'
]

/**
 * Outputs text with a given size/style and element.
 */
const Type = ({
  children,
  className,
  as,
  size,
  tight,
  italic,
  bold,
  demi,
  heavy,
  padded,
  ...rest
}) => (
  <Element
    as={as}
    className={classNames(
      styles.Type,
      size && styles[size],
      tight && styles.tight,
      italic && styles.italic,
      bold && styles.bold,
      demi && styles.demi,
      heavy && styles.heavy,
      padded && styles.padded,
      styles.common,

      className
    )}
    {...rest}
  >
    {children}
  </Element>
)

Type.displayName = 'Type'

Type.defaultProps = {
  as: 'div',
  size: 'base'
}

Type.propTypes = {
  children: node.isRequired,
  className: string,
  as: string,
  size: oneOf(sizes),
  tight: bool,
  italic: bool,
  demi: bool,
  heavy: bool,
  padded: bool
}

export default Type

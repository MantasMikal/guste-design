import React from 'react'
import { bool, node, oneOf, string } from 'prop-types'
import classNames from 'classnames'
import Element from 'Primitive/Element'

import styles from './Container.module.scss'

export const sizes = ['small', 'medium', 'large', 'wide']

/**
 * A component used to provide a maximum width for child components.
 * Optionally center-aligned, with preset \`size\` values available. Can
 * also provide gutter spacing.
 */
const Container = ({
  as,
  center,
  children,
  className,
  gutter,
  noClearfix,
  size,
  spacious,
  hideOverflow
}) => (
  <Element
    as={as}
    className={classNames(
      styles.Container,
      center && styles.center,
      gutter && styles.gutter,
      noClearfix && styles.noClearfix,
      size && styles[size],
      spacious && styles.spacious,
      hideOverflow && styles.hideOverflow,
      className
    )}
  >
    {children}
  </Element>
)

Container.propTypes = {
  as: string,
  center: bool,
  children: node.isRequired,
  className: string,
  gutter: bool,
  noClearfix: bool,
  size: oneOf(sizes),
  spacious: bool,
  hideOverflow: bool
}

export default Container

import React from 'react'
import classNames from 'classnames'
import { bool, node } from 'prop-types'

import styles from './TextAlign.module.scss'
/**
 * Sets the text-alignment of child components`
 */
const TextAlign = ({ center, children, justify, left, right }) => {
  const getAlignmentType = () => {
    if (center) return 'center'
    if (justify) return 'justify'
    if (left) return 'left'
    if (right) return 'right'
  }

  const alignmentType = getAlignmentType()

  return (
    <div
      className={classNames(
        styles.TextAlign,
        alignmentType && styles[alignmentType]
      )}
    >
      {children}
    </div>
  )
}

TextAlign.propTypes = {
  children: node.isRequired,
  center: bool,
  justify: bool,
  left: bool,
  right: bool
}

export default TextAlign

import React from 'react'
import { object, node, bool } from 'prop-types'
import classNames from 'classnames'
import styles from './Grid.module.scss'

/**
 * Used by portable text editor for grid customisation
 * See Common/ContentBlock
 * TODO:
 * This can be improved so we don't pass inline styles directly
 */
const Grid = ({ style, centered, children }) => {
  return (
    <div
      className={classNames(styles.Grid, centered && styles.centered)}
      style={style}
    >
      {children}
    </div>
  )
}

Grid.propTypes = {
  style: object,
  children: node,
  centered: bool
}

export default Grid

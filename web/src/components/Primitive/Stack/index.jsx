import React from 'react'
import classNames from 'classnames'
import { node, oneOf } from 'prop-types'

import styles from './Stack.module.scss'

const gaps = ['small', 'medium', 'large']

/**
 * A wrapper component which evenly vertically-spaces its children.
 */
const Stack = ({ children, gap }) => (
  <div className={classNames(styles.Stack, gap && styles[gap])}>{children}</div>
)

Stack.defaultProps = {
  gap: 'medium'
}

Stack.propTypes = {
  children: node.isRequired,
  gap: oneOf(gaps)
}

export default Stack

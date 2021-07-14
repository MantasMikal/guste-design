import React from 'react'
import classNames from 'classnames'
import { node, oneOf } from 'prop-types'

import styles from './Stack.module.scss'

const gaps = ['small', 'medium', 'large']

/**
 * A wrapper component which evenly vertically-spaces its children.
 */
const Stack = ({ children, gap, className }) => (
  <div className={classNames(styles.Stack, gap && styles[gap], className)}>{children}</div>
)

Stack.defaultProps = {
  gap: 'small'
}

Stack.propTypes = {
  children: node.isRequired,
  gap: oneOf(gaps)
}

export default Stack

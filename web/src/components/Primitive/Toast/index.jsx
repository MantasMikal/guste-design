import React from 'react'
import { createPortal } from 'react-dom'
import { node, oneOf } from 'prop-types'
import classNames from 'classnames'

import styles from './Toast.module.scss'

import Notification from '../Notification'

/**
 * A fixed-position notification-style component with optional onDismiss prop
 * to manually handle visibility.

 * Note: This component doesn’t include the state-based functionality
 * required to dismiss: see \`<Toaster />\`.

 * TODO: future functionality may include:
 * - stacking multiple Toasts
 */
const Toast = ({ children, x, y, ...other }) => {
  if (typeof window === 'undefined') return null

  return createPortal(
    <aside
      className={classNames(styles.Toast, styles[x], styles[y])}
      role="status"
      tabIndex="-1"
    >
      <Notification {...other} shadow>
        {children}
      </Notification>
    </aside>,
    document.body
  )
}

Toast.defaultProps = {
  x: 'center',
  y: 'bottom'
}

Toast.propTypes = {
  children: node.isRequired,
  x: oneOf(['left', 'center', 'right']),
  y: oneOf(['top', 'bottom'])
}

export default Toast

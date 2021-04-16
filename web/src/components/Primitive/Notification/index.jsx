import React, { useContext } from 'react'
import { bool, func, node, oneOf, string } from 'prop-types'
import classNames from 'classnames'

import { StatusContext } from 'Context/StatusContext'

import styles from './Notification.module.scss'

import Icon from '../Icon'
import IconButton from '../IconButton'

/**
 * A status-ready notification component. If passed an onDismiss function,
 * a close button is added to the right-hand side.
 */
const Notification = ({ children, icon, onDismiss, shadow, status }) => {
  const contextStatus = useContext(StatusContext)
  const derivedStatus = status || contextStatus

  return (
    <div
      className={classNames(
        styles.Notification,
        derivedStatus && styles[derivedStatus],
        shadow && styles.shadow
      )}
    >
      {icon && (
        <div className={styles.NotificationIcon}>
          <Icon type={icon} a11yText="" />
        </div>
      )}
      <div className={styles.NotificationContent}>{children}</div>
      {onDismiss && (
        <div className={styles.NotificationDismiss}>
          <IconButton
            a11yText="Dismiss"
            icon="close"
            increaseHitArea
            onClick={onDismiss}
            small
          />
        </div>
      )}
    </div>
  )
}

Notification.propTypes = {
  children: node.isRequired,
  icon: string,
  onDismiss: func,
  shadow: bool,
  status: oneOf(['none', 'error', 'notice', 'success', 'warning'])
}

export default Notification

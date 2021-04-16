import React, { useContext } from 'react'
import classNames from 'classnames'
import { node, oneOf } from 'prop-types'

import { StatusContext } from '../../Context/StatusContext'

import styles from './StatusColor.module.scss'

/**
 * Takes a status, either directly or via a context provider, to use as the
 * CSS \`color\` property.
 */
const StatusColor = ({ children, status }) => {
  const contextStatus = useContext(StatusContext)
  const derivedStatus = status || contextStatus

  return (
    <div
      className={classNames(
        styles.StatusColor,
        derivedStatus && styles[derivedStatus]
      )}
    >
      {children}
    </div>
  )
}

StatusColor.propTypes = {
  children: node.isRequired,
  status: oneOf(['none', 'error', 'notice', 'success', 'warning'])
}

export default StatusColor

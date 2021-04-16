import React, { useContext } from 'react'
import { node, oneOf } from 'prop-types'
import classNames from 'classnames'

import { StatusContext } from '../../../../Context/StatusContext'
import styles from './FieldFeedback.module.scss'

const FieldFeedback = ({ children, status }) => {
  const contextStatus = useContext(StatusContext)
  const derivedStatus = status || contextStatus
  return (
    <div
      className={classNames(
        styles.FieldFeedback,
        derivedStatus && styles[derivedStatus]
      )}
    >
      {children}
    </div>
  )
}

FieldFeedback.propTypes = {
  children: node.isRequired,
  status: oneOf(['none', 'error', 'notice', 'success', 'warning'])
}

export default FieldFeedback

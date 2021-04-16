import React from 'react'
import { bool, node, oneOf } from 'prop-types'
import classNames from 'classnames'

import styles from './StepProgressItem.module.scss'

const StepProgress = ({ children, complete, current, status }) => {
  return (
    <div
      className={classNames(
        styles.StepProgressItem,
        complete && styles.complete,
        current && styles.current,
        status && styles[status]
      )}
      {...(current && { 'aria-current': 'step' })}
    >
      {children}
    </div>
  )
}

StepProgress.propTypes = {
  children: node.isRequired,
  complete: bool,
  current: bool,
  status: oneOf(['positive', 'negative'])
}

export default StepProgress

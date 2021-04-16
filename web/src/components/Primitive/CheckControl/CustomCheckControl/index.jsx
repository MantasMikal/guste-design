import React, { useContext } from 'react'
import { oneOf } from 'prop-types'
import classNames from 'classnames'

import { StatusContext } from '../../../Context/StatusContext'

import styles from './CustomCheckControl.module.scss'

import NativeCheckControl from '../NativeCheckControl'

const CustomCheckControl = ({ status, type, ...other }) => {
  const contextStatus = useContext(StatusContext)
  const derivedStatus = status || contextStatus
  const componentClassName = classNames(
    styles.CustomCheckControl,
    type && styles[type],
    derivedStatus && styles[derivedStatus]
  )

  return (
    <span className={componentClassName}>
      <NativeCheckControl
        className={styles.CustomCheckControlControl}
        type={type}
        {...other}
      />
      <span className={styles.CustomCheckControlIndicator} />
    </span>
  )
}

CustomCheckControl.propTypes = {
  status: oneOf(['none', 'error', 'notice', 'success', 'warning']),
  type: oneOf(['checkbox', 'radio']).isRequired
}

export default CustomCheckControl

import React, { useContext } from 'react'
import { bool, oneOf } from 'prop-types'
import classNames from 'classnames'

import { StatusContext } from 'Context/StatusContext'

import styles from './CustomSelectControl.module.scss'

import Icon from '../../Icon'
import NativeSelectControl from '../NativeSelectControl'

const CustomSelectControl = ({ disabled, multiple, status, className, ...other }) => {
  const contextStatus = useContext(StatusContext)
  const derivedStatus = status || contextStatus

  return (
    <span
      className={classNames(
        styles.CustomSelectControl,
        multiple && styles.multiple,
        derivedStatus && styles[derivedStatus],
        disabled && styles.disabled,
        className
      )}
    >
      {!multiple && (
        <div className={styles.CustomSelectControlIndicator} aria-hidden>
          <Icon type="expand-more" width={24} height={24} a11yText="" />
        </div>
      )}
      <NativeSelectControl
        disabled={disabled}
        multiple={multiple}
        status={derivedStatus}
        {...other}
      />
    </span>
  )
}

CustomSelectControl.propTypes = {
  disabled: bool,
  multiple: bool,
  status: oneOf(['error', 'notice', 'success', 'warning'])
}

export default CustomSelectControl

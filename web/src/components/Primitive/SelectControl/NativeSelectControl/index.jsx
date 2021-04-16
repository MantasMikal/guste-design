import React, { useContext } from 'react'
import {
  arrayOf,
  bool,
  func,
  node,
  number,
  oneOf,
  oneOfType,
  string
} from 'prop-types'
import classNames from 'classnames'

import { StatusContext } from '../../../Context/StatusContext'

import styles from './NativeSelectControl.module.scss'

const NativeSelectControl = ({
  children,
  className,
  controlRef,
  defaultValue,
  disabled,
  id,
  multiple,
  name,
  onBlur,
  onChange,
  onFocus,
  readOnly,
  required,
  size,
  status,
  tabIndex,
  value
}) => {
  const contextStatus = useContext(StatusContext)
  const derivedStatus = status || contextStatus
  const componentClassName = classNames(
    styles.NativeSelectControl,
    multiple && styles.multiple,
    derivedStatus && styles[derivedStatus],
    className
  )

  return (
    <select
      // autoFocus is intentionally omitted for a11y reasons:
      // https://w3c.github.io/html/sec-forms.html#autofocusing-a-form-control-the-autofocus-attribute
      className={componentClassName}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id || name}
      multiple={multiple}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      readOnly={readOnly}
      ref={controlRef}
      required={required}
      size={size}
      status={status}
      tabIndex={tabIndex}
      value={value}
    >
      {children}
    </select>
  )
}

NativeSelectControl.propTypes = {
  children: node.isRequired,
  className: string,
  controlRef: func,
  defaultValue: string,
  disabled: bool,
  id: string,
  multiple: bool,
  name: string.isRequired,
  onBlur: func,
  onChange: func,
  onFocus: func,
  readOnly: bool,
  required: bool,
  size: number,
  status: oneOf(['none', 'error', 'notice', 'success', 'warning']),
  tabIndex: number,
  value: oneOfType([arrayOf(string), string])
}

export default NativeSelectControl

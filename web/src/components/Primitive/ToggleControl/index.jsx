import React, { useContext } from 'react'
import { bool, func, oneOf, string } from 'prop-types'
import classNames from 'classnames'

import { StatusContext } from 'Context/StatusContext'
import Spinner from 'Primitive/Spinner'

import styles from './ToggleControl.module.scss'

/**
 * A toggle control similar to native controls on touch devices. As with
 * all control components, this needs to be associated with a <label>
 * for correct accessibility.
 */
const ToggleControl = ({
  checked,
  disabled,
  id,
  name,
  onChange,
  status,
  textChecked,
  textUnchecked,
  value,
  loading
}) => {
  const contextStatus = useContext(StatusContext)
  const derivedStatus = status || contextStatus
  const hasLabels = textChecked || textUnchecked
  return (
    <div
      className={classNames(
        styles.ToggleControl,
        disabled && styles.disabled,
        derivedStatus && styles[derivedStatus]
      )}
    >
      <input
        checked={checked}
        className={styles.ToggleControlInput}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        type="checkbox"
        value={value}
      />
      <span
        className={classNames(
          styles.ToggleControlFrame,
          hasLabels && styles.labelled
        )}
        {...(hasLabels && {
          'data-text-checked': textChecked,
          'data-text-unchecked': textUnchecked
        })}
      />
      <span className={styles.ToggleControlIndicator}>
        {loading && (
          <span className={styles.ToggleControlSpinner}>
            <Spinner size={16} />
          </span>
        )}
      </span>
    </div>
  )
}

ToggleControl.propTypes = {
  checked: bool,
  disabled: bool,
  id: string,
  name: string.isRequired,
  onChange: func,
  status: oneOf(['none', 'error', 'notice', 'success', 'warning']),
  textChecked: string,
  textUnchecked: string,
  value: string.isRequired,
  loading: bool
}

export default ToggleControl

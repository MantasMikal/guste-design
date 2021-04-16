import React from 'react'
import { bool, node, string, oneOf } from 'prop-types'
import classNames from 'classnames'

import styles from './ButtonStandard.module.scss'

import ButtonBase from 'Primitive/ButtonBase'
import Spinner from 'Primitive/Spinner'

/**
 * Basic button component, building on the ButtonBase component.
 */
const ButtonStandard = ({
  children,
  className,
  disabled,
  loading,
  size,
  ...other
}) => (
  <ButtonBase
    className={classNames(
      styles.ButtonStandard,
      disabled && styles.disabled,
      loading && styles.loading,
      size && styles[size],
      className
    )}
    disabled={disabled}
    {...other}
  >
    <span className={styles.ButtonStandardContent}>{children}</span>
    {loading && (
      <span className={styles.ButtonStandardSpinner}>
        <Spinner revealDelay={200} />
      </span>
    )}
  </ButtonBase>
)

ButtonStandard.propTypes = {
  children: node,
  className: string,
  disabled: bool,
  loading: bool,
  size: oneOf(['small', 'normal', 'large'])
}

export default ButtonStandard

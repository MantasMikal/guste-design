import React from 'react'
import { bool, number, string } from 'prop-types'
import classNames from 'classnames'

import styles from './IconButton.module.scss'

import Icon from 'Primitive/Icon'
import SmartLink from 'Primitive/SmartLink'

/**
 * A simple button component used to present clickable Icons
 */
const IconButton = ({
  a11yText,
  children,
  className,
  icon,
  customIcon,
  iconHeight,
  iconWidth,
  increaseHitArea,
  rounded,
  small,
  solid,
  ...other
}) => (
  <SmartLink
    className={classNames(
      styles.IconButton,
      increaseHitArea && styles.increaseHitArea,
      rounded && styles.rounded,
      small && styles.small,
      solid && styles.solid,
      className
    )}
    {...other}
  >
    <div className={styles.IconButtonInner}>
      {customIcon ? (
        customIcon
      ) : (
        <Icon
          type={icon}
          height={iconHeight}
          width={iconWidth}
          a11yText={a11yText}
        />
      )}
      {children && <span className={styles.IconButtonText}>{children}</span>}
    </div>
  </SmartLink>
)

IconButton.propTypes = {
  a11yText: string,
  children: string,
  className: string,
  icon: string.isRequired,
  iconHeight: number,
  iconWidth: number,
  increaseHitArea: bool,
  rounded: bool,
  small: bool,
  solid: bool
}

export default IconButton

import React from 'react'
import classNames from 'classnames'
import { bool, node, string } from 'prop-types'

import styles from './ShrinkWrapWrapper.module.scss'

import Element from '../../../Element'

const ShrinkWrapWrapper = ({ children, as, fixed, fullWidth, mobileStack }) => (
  <Element
    as={as}
    className={classNames(
      styles.ShrinkWrapWrapper,
      fixed && styles.fixed,
      fullWidth && styles.fullWidth,
      mobileStack && styles.mobileStack
    )}
  >
    {children}
  </Element>
)

ShrinkWrapWrapper.propTypes = {
  children: node.isRequired,
  as: string,
  fixed: bool,
  fullWidth: bool,
  mobileStack: bool
}

export default ShrinkWrapWrapper

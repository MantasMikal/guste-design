import React from 'react'
import { node } from 'prop-types'

import styles from './StepProgressWrapper.module.scss'

const StepProgressWrapper = ({ children }) => {
  return <div className={styles.StepProgressWrapper}>{children}</div>
}

StepProgressWrapper.propTypes = {
  children: node.isRequired
}

export default StepProgressWrapper

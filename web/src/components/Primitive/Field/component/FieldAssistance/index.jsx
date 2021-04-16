import React from 'react'
import { node } from 'prop-types'

import styles from './FieldAssistance.module.scss'

const FieldAssistance = ({ children }) => (
  <div className={styles.FieldAssistance}>{children}</div>
)

FieldAssistance.propTypes = {
  children: node.isRequired
}

export default FieldAssistance

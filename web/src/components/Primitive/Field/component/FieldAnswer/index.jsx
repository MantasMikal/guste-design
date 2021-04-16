import React from 'react'
import { node } from 'prop-types'

import styles from './FieldAnswer.module.scss'

const FieldAnswer = ({ children }) => (
  <div className={styles.FieldAnswer}>{children}</div>
)

FieldAnswer.propTypes = {
  children: node.isRequired
}

export default FieldAnswer

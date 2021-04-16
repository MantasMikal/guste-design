import React from 'react'

import styles from './FieldRequired.module.scss'

const FieldRequired = () => (
  <abbr className={styles.FieldRequired} title="This field is required">
    *
  </abbr>
)

export default FieldRequired

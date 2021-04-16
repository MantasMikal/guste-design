import React from 'react'
import { oneOfType, string, bool, node } from 'prop-types'
import Type from 'Primitive/Type'

import styles from './Badge.module.scss'
import classNames from 'classnames'

const Bdage = ({ content, color, isInactive, ...rest }) => {
  return (
    <div
      className={classNames(styles.Badge, isInactive && styles.isInactive)}
      style={{ backgroundColor: color }}
      {...rest}
    >
      <Type size="small" as="span">
        {content}
      </Type>
    </div>
  )
}

Bdage.propTypes = {
  content: oneOfType([node, string]),
  color: string,
  isInactive: bool
}

export default Bdage

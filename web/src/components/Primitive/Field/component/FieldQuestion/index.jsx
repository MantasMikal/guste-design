import React from 'react'
import { bool, node } from 'prop-types'

import styles from './FieldQuestion.module.scss'

const FieldQuestion = ({ children, htmlFor, noLabel }) => {
  const FieldQuestionInnerEl = noLabel ? 'span' : 'label'

  return (
    <div className={styles.FieldQuestion}>
      <FieldQuestionInnerEl htmlFor={htmlFor}>{children}</FieldQuestionInnerEl>
    </div>
  )
}

FieldQuestion.propTypes = {
  children: node.isRequired,
  noLabel: bool,
  htmlFor: function (props, propName, componentName) {
    if (
      (!props.noLabel || props.noLabel === false) &&
      (props[propName] === undefined || typeof props[propName] !== 'string')
    ) {
      return new Error(
        `The prop \`htmlFor\` is marked as required in \`${componentName}\`, unless also using the \`noLabel\` prop`
      )
    }
  }
}

export default FieldQuestion

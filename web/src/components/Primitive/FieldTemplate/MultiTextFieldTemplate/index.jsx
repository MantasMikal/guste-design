import React from 'react'
import { bool, node, oneOf, string } from 'prop-types'

import Field from '../../Field'
import VisuallyHidden from '../../VisuallyHidden'

const MultiTextFieldTemplate = ({
  assistance,
  children,
  controlName,
  feedback,
  hideLabel,
  inverse,
  label,
  required,
  status
}) => {
  const MultiTextFieldTemplateQuestion = () => (
    <Field.Question noLabel>
      {label}
      {required && <Field.Required />}
    </Field.Question>
  )

  return (
    <Field id={`field--${controlName}`} status={status} template="text">
      {hideLabel ? (
        <VisuallyHidden>
          <MultiTextFieldTemplateQuestion />
        </VisuallyHidden>
      ) : (
        <MultiTextFieldTemplateQuestion />
      )}
      <Field.Answer>{children}</Field.Answer>
      {assistance && <Field.Assistance>{assistance}</Field.Assistance>}
      {feedback && (
        <Field.Feedback inverse={inverse}>{feedback}</Field.Feedback>
      )}
    </Field>
  )
}

MultiTextFieldTemplate.propTypes = {
  assistance: node,
  children: node.isRequired,
  controlName: string.isRequired,
  feedback: node,
  hideLabel: bool,
  inverse: bool,
  label: node.isRequired,
  required: bool,
  status: oneOf(['error', 'notice', 'success', 'warning'])
}

export default MultiTextFieldTemplate

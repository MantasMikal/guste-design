import React from 'react'
import { bool, node, oneOf, string } from 'prop-types'

import Field from '../../Field'
import VisuallyHidden from '../../VisuallyHidden'

const TextFieldTemplate = ({
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
  const TextFieldTemplateQuestion = () => (
    <Field.Question htmlFor={controlName} /* matches Control controlName */>
      {label}
      {required && <Field.Required />}
    </Field.Question>
  )

  return (
    <Field id={`field--${controlName}`} status={status}>
      {hideLabel ? (
        <VisuallyHidden>
          <TextFieldTemplateQuestion />
        </VisuallyHidden>
      ) : (
        <TextFieldTemplateQuestion />
      )}

      <Field.Answer>{children}</Field.Answer>
      {assistance && <Field.Assistance>{assistance}</Field.Assistance>}
      {feedback && (
        <Field.Feedback inverse={inverse}>{feedback}</Field.Feedback>
      )}
    </Field>
  )
}

TextFieldTemplate.propTypes = {
  assistance: node,
  controlName: string.isRequired,
  children: node.isRequired,
  feedback: node,
  hideLabel: bool,
  inverse: bool,
  label: node.isRequired,
  required: bool,
  status: oneOf(['error', 'notice', 'success', 'warning'])
}

export default TextFieldTemplate

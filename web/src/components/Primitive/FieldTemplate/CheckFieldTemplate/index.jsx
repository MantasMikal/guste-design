import React from 'react'
import { bool, node, oneOf, string } from 'prop-types'

import Field from '../../Field'
import VisuallyHidden from '../../VisuallyHidden'

const CheckFieldTemplate = ({
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
  const CheckFieldTemplateQuestion = () => (
    <Field.Question
      htmlFor={controlName} /* matches Control controlName */
      // element="div"
      id={`field-question--${controlName}`}
    >
      {label}
      {required && <Field.Required />}
    </Field.Question>
  )

  return (
    <Field
      id={`field--${controlName}`}
      status={status}
      aria-labelledby={label && `field-question--${controlName}`}
      role="group"
      template="check"
    >
      {label &&
        (hideLabel ? (
          <VisuallyHidden>
            <CheckFieldTemplateQuestion />
          </VisuallyHidden>
        ) : (
          <CheckFieldTemplateQuestion />
        ))}

      <Field.Answer>{children}</Field.Answer>
      {assistance && <Field.Assistance>{assistance}</Field.Assistance>}
      {feedback && (
        <Field.Feedback inverse={inverse}>{feedback}</Field.Feedback>
      )}
    </Field>
  )
}

CheckFieldTemplate.propTypes = {
  assistance: node,
  controlName: string.isRequired,
  children: node.isRequired,
  feedback: node,
  hideLabel: bool,
  inverse: bool,
  label: node,
  required: bool,
  status: oneOf(['error', 'notice', 'success', 'warning'])
}

export default CheckFieldTemplate

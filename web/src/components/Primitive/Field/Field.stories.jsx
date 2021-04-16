import React from 'react'

import Field from '.'
import TextControl from '../TextControl'

export default {
  title: 'Form/Field',
  component: Field,
  argTypes: {
    status: {
      control: {
        type: 'inline-radio',
        options: ['success', 'error', 'warning', 'notice']
      }
    }
  }
}

export const Default = (args) => (
  <Field {...args}>
    <Field.Question htmlFor="example">
      First name <Field.Required />
    </Field.Question>
    <Field.Answer>
      <TextControl name="example" />
      <Field.Assistance>Assistance text</Field.Assistance>
      <Field.Feedback>Feedback text</Field.Feedback>
    </Field.Answer>
  </Field>
)

export const WithStatusContext = (args) => (
  <Field status="success" {...args}>
    <Field.Question htmlFor="example">
      First name <Field.Required />
    </Field.Question>
    <Field.Answer>
      <TextControl name="example" />
      <Field.Assistance>Assistance text</Field.Assistance>
      <Field.Feedback>Feedback text</Field.Feedback>
    </Field.Answer>
  </Field>
)

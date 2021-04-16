import React from 'react'
import { render } from '@testing-library/react'
import Field from '.'

describe('Component: Field', function () {
  test('should output the expected markup', function () {
    const { getByText, getByTitle } = render(
      <Field>
        <Field.Answer>Answer</Field.Answer>
        <Field.Assistance>Assistance</Field.Assistance>
        <Field.Feedback>Feedback</Field.Feedback>
        <Field.Question htmlFor="example">Question</Field.Question>
        <Field.Required />
      </Field>
    )
    expect(getByText('Answer')).toBeTruthy()
    expect(getByText('Assistance')).toBeTruthy()
    expect(getByText('Feedback')).toBeTruthy()
    expect(getByText('Question')).toBeTruthy()
    expect(getByTitle('This field is required')).toBeTruthy()
  })
})

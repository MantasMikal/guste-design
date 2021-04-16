import React from 'react'

import FieldTemplate from './'
import TextControl from '../TextControl'
import CheckControlGroup from '../CheckControlGroup'
import CheckControl from '../CheckControl'

import VisuallyHidden from '../VisuallyHidden'
import SelectControl from '../SelectControl'
import ShrinkWrap from '../ShrinkWrap'

// Setup
const days = [...Array(31).keys()].map((i) => `${i + 1}`)
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const year = new Date().getFullYear()
const years = []
for (var i = 0; i <= 10; ++i) years.push(`${year - i}`)

export default {
  title: 'Form/FieldTemplate',
  component: FieldTemplate,
  argTypes: {
    status: {
      control: {
        type: 'inline-radio',
        options: ['success', 'error', 'warning', 'notice']
      }
    },
    hideLabel: {
      type: 'boolean'
    },
    label: {
      type: 'string'
    },
    required: {
      type: 'boolean'
    },
    feedback: {
      type: 'string'
    }
  }
}

export const TextTemplate = (args) => (
  <FieldTemplate
    label="Example text question"
    status="success"
    required
    feedback="Good answer"
    controlName="exampleText"
    {...args}
  >
    <TextControl
      name="exampleText"
      type="text"
      placeholder="Example placeholder"
      required
      {...args}
    />
  </FieldTemplate>
)

export const TextTemplateWithHiddenLabel = TextTemplate.bind({})
TextTemplateWithHiddenLabel.args = {
  hideLabel: true
}

export const TextTemplateDisabled = TextTemplate.bind({})
TextTemplateDisabled.args = {
  disabled: true
}

export const CheckTemplate = (args) => (
  <FieldTemplate
    template="check"
    label="Example check question"
    assistance="Example assistance text"
    status="error"
    feedback="Please select at least one option"
    controlName="checkboxExample"
    {...args}
  >
    <CheckControlGroup a11yLabel="Example checkboxes">
      <CheckControl type="checkbox" name="checkboxExample" value="1">
        Option one
      </CheckControl>
      <CheckControl type="checkbox" name="checkboxExample" value="2">
        Option two
      </CheckControl>
      <CheckControl type="checkbox" name="checkboxExample" value="3">
        Option three
      </CheckControl>
    </CheckControlGroup>
  </FieldTemplate>
)
CheckTemplate.args = {
  template: 'check'
}

export const CheckTemplateWithHiddenLabel = CheckTemplate.bind({})
CheckTemplateWithHiddenLabel.args = {
  hideLabel: true
}

export const MultiTextTemplate = (args) => (
  <FieldTemplate
    template="multiText"
    label="Example multi-text question"
    required
    controlName="exampleText"
    {...args}
  >
    <ShrinkWrap fullWidth>
      <ShrinkWrap.Item shrink>
        <label>
          <VisuallyHidden>Day</VisuallyHidden>
          <SelectControl name="day" required>
            <option value="">Day</option>
            {days.map((day) => (
              <option value={day} key={`day${day}`}>
                {day}
              </option>
            ))}
          </SelectControl>
        </label>
      </ShrinkWrap.Item>
      <ShrinkWrap.Item shrink>
        <label>
          <VisuallyHidden>Month</VisuallyHidden>
          <SelectControl name="month" required>
            <option value="">Month</option>
            {months.map((month) => (
              <option value={month} key={`month${month}`}>
                {month}
              </option>
            ))}
          </SelectControl>
        </label>
      </ShrinkWrap.Item>
      <ShrinkWrap.Item shrink>
        <label>
          <VisuallyHidden>Year</VisuallyHidden>
          <SelectControl name="year" required>
            <option value="">Year</option>
            {years.map((year) => (
              <option value={year} key={`year${year}`}>
                {year}
              </option>
            ))}
          </SelectControl>
        </label>
      </ShrinkWrap.Item>
    </ShrinkWrap>
  </FieldTemplate>
)
MultiTextTemplate.args = {
  template: 'multiText'
}

export const MultiTextTemplateWithAutoWidth = (args) => (
  <FieldTemplate
    template="multiText"
    label="Example multi-text question"
    status="success"
    required
    feedback="Good answer"
    controlName="exampleText"
    {...args}
  >
    <ShrinkWrap fullWidth>
      <ShrinkWrap.Item>
        <label>
          <VisuallyHidden>Day</VisuallyHidden>
          <SelectControl name="day">
            {days.map((day) => (
              <option value={day} key={`day${day}`}>
                {day}
              </option>
            ))}
          </SelectControl>
        </label>
      </ShrinkWrap.Item>
      <ShrinkWrap.Item>
        <label>
          <VisuallyHidden>Month</VisuallyHidden>
          <SelectControl name="month">
            {months.map((month) => (
              <option value={month} key={`month${month}`}>
                {month}
              </option>
            ))}
          </SelectControl>
        </label>
      </ShrinkWrap.Item>
      <ShrinkWrap.Item>
        <label>
          <VisuallyHidden>Year</VisuallyHidden>
          <SelectControl name="year">
            {years.map((year) => (
              <option value={year} key={`year${year}`}>
                {year}
              </option>
            ))}
          </SelectControl>
        </label>
      </ShrinkWrap.Item>
    </ShrinkWrap>
  </FieldTemplate>
)
MultiTextTemplateWithAutoWidth.args = {
  template: 'multiText'
}

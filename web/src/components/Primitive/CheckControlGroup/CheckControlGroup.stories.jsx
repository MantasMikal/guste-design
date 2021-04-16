import React from 'react'

import CheckControlGroup from '.'
import CheckControl from '../CheckControl'

export default {
  title: 'Form/CheckControlGroup',
  component: CheckControlGroup
}

export const Checkboxes = (args) => (
  <CheckControlGroup {...args} a11yLabel="Favourite colours">
    <CheckControl type="radio" name="radioExample" value="1">
      Red
    </CheckControl>
    <CheckControl type="radio" name="radioExample" value="2">
      Green
    </CheckControl>
    <CheckControl type="radio" name="radioExample" value="3">
      Blue
    </CheckControl>
  </CheckControlGroup>
)

export const Radios = (args) => (
  <CheckControlGroup {...args} a11yLabel="Favorite colour">
    <CheckControl type="radio" name="radioExample" value="1">
      Red
    </CheckControl>
    <CheckControl type="radio" name="radioExample" value="2">
      Green
    </CheckControl>
    <CheckControl type="radio" name="radioExample" value="3">
      Blue
    </CheckControl>
  </CheckControlGroup>
)

import React from 'react'
import A11yNavigation from '.'

export default {
  title: 'Core/A11yNavigation',
  component: A11yNavigation
}

// Allows users navigating using a keyboard or other assistive technology
// to quickly skip to pre-defined areas of the page. As a minimum, this
// would likely consist of links to the pages main content area, and
// primary site navigation, but may include secondary content or
// navigations as required.

// _Note: A11yNavigation is hidden by default, so click into the preview
// area and press \`TAB\` to view. Additional content is shown in some
// previews to illustrate that links need to have appropriate targets._

const Template = (args) => (
  <A11yNavigation {...args}>
    <a href="#content">Jump to main content</a>
    <a href="#navigation">Jump to primary navigation</a>
  </A11yNavigation>
)

export const Default = Template.bind({})

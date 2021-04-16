import React from 'react'

import ShrinkWrap from '.'

export default {
  title: 'Utility/ShrinkWrap',
  component: ShrinkWrap
}

export const Default = (args) => (
  <ShrinkWrap {...args}>
    <ShrinkWrap.Item shrink>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      <p style={{ background: '#FCCA74' }}>Aenean eu leo quam.</p>
    </ShrinkWrap.Item>
  </ShrinkWrap>
)

export const FullWidth = Default.bind({})
FullWidth.args = {
  fullWidth: true
}

export const VerticalAlignTop = (args) => (
  <ShrinkWrap {...args}>
    <ShrinkWrap.Item shrink vAlign="top">
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item vAlign="top">
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
  </ShrinkWrap>
)

export const VerticalAlignMiddle = (args) => (
  <ShrinkWrap {...args}>
    <ShrinkWrap.Item shrink vAlign="middle">
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item vAlign="middle">
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
  </ShrinkWrap>
)

export const VerticalAlignBottom = (args) => (
  <ShrinkWrap {...args}>
    <ShrinkWrap.Item shrink vAlign="bottom">
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item vAlign="bottom">
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
  </ShrinkWrap>
)

export const MultipleItems = (args) => (
  <ShrinkWrap {...args}>
    <ShrinkWrap.Item shrink>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum.
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae
      elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
    <ShrinkWrap.Item shrink>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
  </ShrinkWrap>
)

export const CustomWrappingElement = (args) => (
  <ShrinkWrap {...args} as="label">
    <ShrinkWrap.Item shrink>
      <input type="checkbox" />
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>I agree to the terms and conditions</ShrinkWrap.Item>
  </ShrinkWrap>
)

export const EvenSpacing = (args) => (
  <ShrinkWrap {...args} fixed fullWidth>
    <ShrinkWrap.Item shrink>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum.
    </ShrinkWrap.Item>
    <ShrinkWrap.Item shrink>
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae
      elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
  </ShrinkWrap>
)

export const NoWrappingForShrinkItems = (args) => (
  <ShrinkWrap fullWidth {...args}>
    <ShrinkWrap.Item noWrap>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
      Aenean eu leo
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae
      elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
  </ShrinkWrap>
)

export const Comfortable = (args) => (
  <ShrinkWrap {...args}>
    <ShrinkWrap.Item>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item spacing="comfortable">
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae
      elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
  </ShrinkWrap>
)

export const GeneralSpacingExamples = (args) => (
  <>
    <em>Default state:</em>
    <ShrinkWrap {...args}>
      <ShrinkWrap.Item>Item one</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item two</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item three is longer</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item four</ShrinkWrap.Item>
    </ShrinkWrap>
    <hr style={{ margin: '20px 0' }} />
    <em>Full-width, auto layout:</em>
    <ShrinkWrap {...args}>
      <ShrinkWrap.Item>Item one</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item two</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item three is longer</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item four</ShrinkWrap.Item>
    </ShrinkWrap>
    <hr style={{ margin: '20px 0' }} />
    <em>Full-width, fixed layout:</em>
    <ShrinkWrap {...args} fullWidth fixed>
      <ShrinkWrap.Item>Item one</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item two</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item three is longer</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item four</ShrinkWrap.Item>
    </ShrinkWrap>
  </>
)

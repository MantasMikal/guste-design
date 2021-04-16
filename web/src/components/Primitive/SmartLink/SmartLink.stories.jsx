import React from 'react'
import { action } from '@storybook/addon-actions'

import SmartLink from './'

export default {
  title: 'Core/SmartLink',
  component: SmartLink
}

export const Button = (args) => <SmartLink {...args}>Button</SmartLink>

export const ButtonTypes = (args) => (
  <>
    <div>
      <SmartLink {...args} type="button">
        Button (button)
      </SmartLink>
    </div>
    <div>
      <SmartLink {...args} type="submit">
        Button (submit)
      </SmartLink>
    </div>
    <div>
      <SmartLink {...args} type="reset">
        Button (reset)
      </SmartLink>
    </div>
  </>
)

export const WithAnchor = (args) => (
  <SmartLink {...args} href="https://example.com">
    Anchor
  </SmartLink>
)

export const WihtOnClick = (args) => (
  <SmartLink {...args} onClick={action('clicked')}>
    Button with onClick
  </SmartLink>
)

export const WithAdditionalAttributes = (args) => (
  <>
    <div>
      <SmartLink {...args} disabled>
        Button with `disabled`
      </SmartLink>
    </div>
    <div>
      <SmartLink {...args} title="example">
        Button with `title`
      </SmartLink>
    </div>
  </>
)

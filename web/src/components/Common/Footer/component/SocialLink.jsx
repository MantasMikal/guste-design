import React from 'react'
import { string } from 'prop-types'

import SmartLink from 'Primitive/SmartLink'
import Icon from 'Primitive/Icon'
import Type from 'Primitive/Type'

const SocialLink = ({ url, type, text }) => (
  <SmartLink href={url} key={`${type}-icon`}>
    <Icon type={type} width={30} height={30} a11yText={type} />
    {text && (
      <Type as="span" size="base">
        {text}
      </Type>
    )}
  </SmartLink>
)

SocialLink.propTypes = {
  type: string,
  text: string,
  url: string
}

export default SocialLink

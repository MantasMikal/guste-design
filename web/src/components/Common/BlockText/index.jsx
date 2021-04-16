import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'

import Type from 'Primitive/Type'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        default:
          return (
            <Type as="p" size="base">
              {props.children}
            </Type>
          )
      }
    }
  }
}

const BlockText = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockText

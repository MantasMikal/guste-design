import React from 'react'

import Hide from '.'

export default {
  title: 'Layout/Hide',
  component: Hide
}

export const Default = () => (
  <div>
    Here is content{' '}
    <Hide as="span" at="tablet">
      <span style={{ background: 'orange' }}>
        hidden at Tablet width and above
      </span>
    </Hide>
    <Hide as="span" below="tablet">
      <span style={{ background: 'lightblue' }}>hidden below Tablet width</span>
    </Hide>
  </div>
)

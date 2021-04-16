import React from 'react'
import { node } from 'prop-types'
import Zoom from 'react-medium-image-zoom'

import 'react-medium-image-zoom/dist/styles.css'

/**
 * Makes any component zoomable. Just wrap children
 */
const Zoomable = ({ children }) => {
  return (
    <Zoom
      transitionDuration={200}
      overlayBgColorEnd="rgba(255, 255, 255, 0.8)"
      overlayBgColorStart="rgba(0, 0, 0, 0)"
      zoomMargin={20}
    >
      {children}
    </Zoom>
  )
}

Zoomable.propTypes = {
  children: node.isRequired
}

export default Zoomable

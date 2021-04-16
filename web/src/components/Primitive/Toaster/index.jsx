import React, { useState } from 'react'
// import {} from 'prop-types'

import Toast from '../Toast'

/**
 * Simple state management for the \`<Toast />\` component, handling dismiss
 * functionality.

 * TODO: future functionality may include:
 * - auto-dismiss functionality
 * - auto-dismiss progress bar
 * - pause/cancel auto-timeout on focus/hover
 * - reveal delay
 * - Multiple notifications stacked
 */
const Toaster = (props) => {
  const [visible, toggleVisible] = useState(true)

  const handleDismiss = () => {
    toggleVisible(false)
  }

  if (!visible) return null
  return <Toast {...props} onDismiss={handleDismiss} />
}

export default Toaster

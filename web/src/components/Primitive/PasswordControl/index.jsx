import React, { useRef, useState } from 'react'
import { oneOf } from 'prop-types'

import DecoratedTextControl from 'Primitive/DecoratedTextControl'
import IconButton from 'Primitive/IconButton'

/**
 * A wrapper around a TextControl component which adds password visibility
 * toggling functionality. When the toggle button is pressed, focus
 * immediately returns to the input.
 */
const PasswordControl = ({ type, ...other }) => {
  const [toggleType, setType] = useState(type)
  const controlEl = useRef(null)

  const handleToggleType = () => {
    setType(toggleType === 'password' ? 'text' : 'password')
    controlEl && controlEl.current.focus()
  }

  const isPasswordVisible = toggleType === 'text'

  return (
    <DecoratedTextControl
      {...other}
      type={toggleType}
      controlRef={controlEl}
      after={
        <IconButton
          icon={isPasswordVisible ? 'visibility' : 'visibility-off'}
          a11yText={isPasswordVisible ? 'Hide password' : 'Reveal password'}
          onClick={handleToggleType}
        />
      }
      afterInteractive
    />
  )
}

PasswordControl.defaultProps = {
  type: 'password'
}

PasswordControl.propTypes = {
  type: oneOf(['password', 'text'])
}

export default PasswordControl

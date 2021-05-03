import React, { cloneElement, useState } from 'react'
import { node } from 'prop-types'

import ContactSection from './Contact'

const Contact = ({ trigger, ...other }) => {
  const [open, toggleOpen] = useState(false)

  const handleToggleOpen = () => {
    toggleOpen(!open)
  }

  return (
    <>
      {cloneElement(trigger, { onClick: handleToggleOpen })}
      <ContactSection open={open} onClose={handleToggleOpen} {...other} />
    </>
  )
}

Contact.propTypes = {
  trigger: node.isRequired
}

export default Contact

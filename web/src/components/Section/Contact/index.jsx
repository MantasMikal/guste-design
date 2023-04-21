import React, { cloneElement } from 'react'
import { node } from 'prop-types'

import ContactSection from './Contact'
import { NavigationContext } from 'Context/NavigationContext'

const Contact = ({ trigger, ...other }) => {
  const {isContactModalOpen, setContactModalOpen} = React.useContext(NavigationContext)

  const handleToggleOpen = () => {
    setContactModalOpen(!isContactModalOpen)
  }

  return (
    <>
      {cloneElement(trigger, { onClick: handleToggleOpen })}
      <ContactSection open={isContactModalOpen} onClose={handleToggleOpen} {...other} />
    </>
  )
}

Contact.propTypes = {
  trigger: node.isRequired
}

export default Contact

import React, { cloneElement, useState } from 'react'
import { node } from 'prop-types'

import PageModal from './PageModal'

const PageModalTrigger = ({ trigger, image, body, ...other }) => {
  const [open, toggleOpen] = useState(false)

  const handleToggleOpen = () => {
    toggleOpen(!open)
  }

  return (
    <>
      {cloneElement(trigger, { onClick: handleToggleOpen })}
      <PageModal
        image={image}
        body={body}
        open={open}
        onClose={handleToggleOpen}
        {...other}
      />
    </>
  )
}

PageModalTrigger.propTypes = {
  trigger: node.isRequired
}

export default PageModalTrigger

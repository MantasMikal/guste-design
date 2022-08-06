import React from 'react'
import NewsletterSignup from 'Section/NewsletterSignup'

const createNewsletterSignup = (component) => {
  if (!component) return null
  return <NewsletterSignup {...component} />
}

export default createNewsletterSignup

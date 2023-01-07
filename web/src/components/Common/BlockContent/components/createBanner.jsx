import Banner from 'Common/Banner'
import React from 'react'

const createBanner = (component) => {
  if (!component) return null

  return <Banner {...component} />
}

export default createBanner

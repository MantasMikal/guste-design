import CustomGrid from 'Common/CustomGrid'
import React from 'react'

const createCustomGrid = (component) => {
  if (!component) return null

  return <CustomGrid {...component} />
}

export default createCustomGrid

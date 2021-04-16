import React from 'react'
import createGrid from './components/createGrid'
import createMedia from './components/createMedia'

/**
 * Used to create components coming from CMS
 */
export default function createComponents(components) {
  if (!components) {
    return <> </>
  }
  return components.map((component) => {
    switch (component._type) {
      case 'grid':
        return createGrid(component)
      case 'image':
        return createMedia(component)
      case 'figure':
        return createMedia(component)
      case 'video':
        return createMedia(component)
      default:
        return <></>
    }
  })
}

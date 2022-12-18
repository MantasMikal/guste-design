import React from 'react'
import createGrid from './components/createGrid'
import createLine from './components/createLine'
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
      case 'line':
        return createLine(component)
      case 'projectSlideshow':
        return createMedia(component)
      default:
        return <></>
    }
  })
}

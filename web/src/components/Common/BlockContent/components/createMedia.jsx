import React from 'react'
import createVideo from './createVideo'
import createFigure from './createFigure'
import createContentBlock from './createContentBlock'

export const createMediaComponent = (component) => {
  switch (component._type) {
    case 'figure':
      return createFigure(component)

    case 'image':
      return createFigure(component)

    case 'video':
      return createVideo(component)

    case 'contentBlock':
      return createContentBlock(component)

    default:
      return <> </>
  }
}

export default createMediaComponent

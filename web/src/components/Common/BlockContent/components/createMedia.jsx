import React from 'react'
import createVideo from './createVideo'
import createFigure from './createFigure'
import createContentBlock from './createContentBlock'
import createProjectSlideshow from './createProjectSlideshow'

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

    case 'projectSlideshow':
      return createProjectSlideshow(component)

    default:
      return <> </>
  }
}

export default createMediaComponent

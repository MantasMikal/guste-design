import React from 'react'
import Zoomable from 'Primitive/Zoomable'
import Image from 'Primitive/Image'

const createFigure = (figure) => {
  if (!figure || !figure.asset || !figure.asset.mimeType) return null
  const { isZoomable, asset, alt, maxWidth } = figure

  const border = figure.border ? { border: `2px solid black` } : null
  const styles = {
    width: '100%',
    height: '100%',
    ...border
  }

  let imgCmp = (
    <Image image={figure} imgWrapperStyle={styles} />
  )
  if (asset.mimeType === 'image/gif') {
    imgCmp = (
      <img
        src={asset.url}
        alt={alt || ' '}
        style={{ width: '100%' }}
        key={figure.asset._id}
      />
    )
  }

  return (
    <div key={figure._key} style={{ maxWidth: maxWidth }}>
      {!isZoomable ? imgCmp : <Zoomable>{imgCmp}</Zoomable>}
    </div>
  )
}

export default createFigure

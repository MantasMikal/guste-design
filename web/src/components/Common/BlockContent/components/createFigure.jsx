import React from 'react'
import Zoomable from 'Primitive/Zoomable'
import Image from 'Primitive/Image'
import SmartLink from 'Primitive/SmartLink'

const createFigure = (figure) => {
  if (!figure || !figure.asset || !figure.asset.mimeType) return null
  const { isZoomable, asset, alt, maxWidth, imageURL } = figure

  const border = figure.border ? { border: `2px solid black` } : null
  const styles = {
    width: '100%',
    height: '100%',
    ...border
  }

  let imgCmp = <Image image={figure} imgWrapperStyle={styles} />
  if (asset.mimeType === 'image/gif') {
    imgCmp = <img src={asset.url} alt={alt || ''} style={styles} />
  }

  const WrapperEl = imageURL ? SmartLink : 'div'

  return (
    <WrapperEl
      {...(imageURL && {
        href: imageURL,
        style: { display: 'block' },
        className: 'image-hover'
      })}
      key={figure._key}
      style={{ maxWidth: maxWidth, marginBottom: '10px' }}
    >
      {imageURL || !isZoomable ? imgCmp : <Zoomable>{imgCmp}</Zoomable>}
    </WrapperEl>
  )
}

export default createFigure

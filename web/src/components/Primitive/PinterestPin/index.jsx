import React from 'react'

const PinterestPin = ({ slug, description: desc, pinType, imageUrl, className }) => {
  // Optional parameters
  // Source settings. See: https://developers.pinterest.com/docs/widgets/save/?#button-style-settings
  const url = `https://guste.design/${slug}`
  const description = `&description="${desc}"`
  const mediaUrl = pinType === 'buttonPin' ? `&media=${imageUrl}` : '' // don't supply the mediaUrl for buttonBookmark

  const to = `https://www.pinterest.com/pin/create/button/?url=${url}${description}${mediaUrl}`

  // Add this to your component where you want the button to appear
  return (
    <div className={className}>
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      data-pin-do={pinType}
      data-pin-description={desc}
      data-pe={desc}
    >Pin</a>
    </div>
  )
}

PinterestPin.propTypes = {}

export default PinterestPin

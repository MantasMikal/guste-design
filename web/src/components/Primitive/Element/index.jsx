import React from 'react'
import { node, string } from 'prop-types'

/** 
 * Low-level component which can be used within other components to
 * specify which HTML element to use on a per-use basis.

 * Example: would be used as the root level element within an optionally
 * clickable component to allow the author to choose between a \`<div />\`,
 * \`<a />\` or \`<button />\`.

 * Unlikely to be used directly as authors could instead use the desired
 * element.
*/
const Element = ({ as, ...other }) => {
  const ElementEl = as

  return <ElementEl {...other} />
}

Element.defaultProps = {
  as: 'div'
}

Element.propTypes = {
  children: node.isRequired,
  as: string
}

export default Element

import React from 'react'
import { bool } from 'prop-types'

import CustomSelectControl from './CustomSelectControl'
import NativeSelectControl from './NativeSelectControl'

/**
 * Select dropdown, using custom styling to better match the standard
 * text-style control component.

 * Note: some demos do not update when you select as they are presented as
 * controlled components, but using dummy onChange functions.
 */
const SelectControl = ({ native, ...controlProps }) => {
  const SelectControlType = native ? NativeSelectControl : CustomSelectControl

  return <SelectControlType {...controlProps} />
}

SelectControl.propTypes = {
  native: bool
}

export default SelectControl

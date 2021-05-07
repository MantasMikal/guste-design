import React from 'react'
import { array, string, func } from 'prop-types'
import classNames from 'classnames'

import styles from './ColorPalette.module.scss'

const ColorPalette = ({ colors, onColorClick, activeColor, className}) => {
  return (
    <div className={classNames(styles.ColorPalette, className)}>
      {colors.map((color, i) => (
        <button
          type="button" aria-label="Select color"
          onClick={() => onColorClick(color)}
          style={{ backgroundColor: `${color}` }}
          key={`COLOR-${i}`}
          className={classNames(styles.Color, color === activeColor && styles.active)}
        />
      ))}
    </div>
  )
}

ColorPalette.propTypes = {
  colors: array.isRequired,
  onColorClick: func.isRequired,
  activeColor: string
}

export default ColorPalette

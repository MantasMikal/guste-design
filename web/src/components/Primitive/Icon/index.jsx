import React from 'react'
import { number, oneOf, string, object } from 'prop-types'
import classNames from 'classnames'

import svgDimensionsFormatter from 'libs/svg-dimensions-formatter'
import ratioScaler from 'libs/ratio-scaler'

import styles from './Icon.module.scss'

const svgs = require.context('../../../assets/svg/icon/', false, /\.svg$/)

// Exported to allow iteration in storybook
export const vAligns = ['baseline', 'bottom', 'middle', 'top']
export const types = svgs
  .keys()
  .map((key) => key.replace(`./`, '').replace(`.svg`, ''))

/**
 * A wrapping element containing an inline SVG. Displays at the SVGs native
 * size by default, but a custom width/height can be passed.

 * An a11yText prop is required, similar to how an image requires an alt
 * attribute. If the icon is purely decorational, or is described by text
 * directly next to it, then a blank string can be passed as a11yText to
 */
const Icon = ({ a11yText, className, type, height, width, vAlign, style }) => {
  const SvgType = svgs(`./${type}.svg`).default

  const targetDimensions = { width, height }
  const nativeDimensions = svgDimensionsFormatter(SvgType)
  const ratioDimensions = ratioScaler(
    targetDimensions,
    nativeDimensions,
    'ceil'
  )

  return (
    <span
      className={classNames(styles.Icon, vAlign && styles[vAlign], className)}
      {...(a11yText && {
        role: 'img',
        'aria-label': a11yText
      })}
      {...(!a11yText && {
        'aria-hidden': 'true'
      })}
      style={{
        width: `${ratioDimensions.width}px`,
        height: `${ratioDimensions.height}px`,
        ...style
      }}
    >
      <SvgType />
    </span>
  )
}

Icon.propTypes = {
  a11yText: string.isRequired,
  className: string,
  type: oneOf(types).isRequired,
  height: number,
  width: number,
  style: object,
  vAlign: oneOf(vAligns)
}

export default Icon

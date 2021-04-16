import React from 'react'
import classNames from 'classnames'
import { any, number, object, oneOfType, string } from 'prop-types'

import styles from './Spacer.module.scss'

import Element from '../Element'

// const unit = parseInt(styles.unit, 10) || 8
const unit = 8

const formatValue = (value) => {
  if (typeof value === 'string') return value
  return value * unit
}

const formatValues = (property, values) => {
  const { xy, t, r, b, l } = values
  return {
    ...(xy && { [`${property}`]: formatValue(xy) }),
    ...(t && { [`${property}Top`]: formatValue(t) }),
    ...(r && { [`${property}Right`]: formatValue(r) }),
    ...(b && { [`${property}Bottom`]: formatValue(b) }),
    ...(l && { [`${property}Left`]: formatValue(l) }),
    ...(l && { [`${property}Left`]: formatValue(l) })
  }
}

/**
 * A wrapper component which can be used to provide margin or padding where
 * required.

 * Values passed as numbers will be multiplied by the project’s default
 * spacing unit to allow for easy consistency. Values passed as strings
 * will be output without modification.
 */
const Spacer = ({
  as,
  children,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  style
}) => {
  const marginValues = {
    xy: m,
    t: mt || my,
    r: mr || mx,
    b: mb || my,
    l: ml || mx
  }
  const paddingValues = {
    xy: p,
    t: pt || py,
    r: pr || px,
    b: pb || py,
    l: pl || px
  }

  return (
    <Element
      as={as}
      className={classNames(styles.Spacer)}
      style={{
        ...formatValues('margin', marginValues),
        ...formatValues('padding', paddingValues),
        ...style
      }}
    >
      {children}
    </Element>
  )
}

Spacer.propTypes = {
  children: any.isRequired,
  as: string,
  m: oneOfType([number, string]),
  mx: oneOfType([number, string]),
  my: oneOfType([number, string]),
  mt: oneOfType([number, string]),
  mr: oneOfType([number, string]),
  mb: oneOfType([number, string]),
  ml: oneOfType([number, string]),
  p: oneOfType([number, string]),
  px: oneOfType([number, string]),
  py: oneOfType([number, string]),
  pt: oneOfType([number, string]),
  pr: oneOfType([number, string]),
  pb: oneOfType([number, string]),
  pl: oneOfType([number, string]),
  style: object
}

export default Spacer

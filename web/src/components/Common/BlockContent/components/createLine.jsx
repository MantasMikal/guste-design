import React from 'react'

const createLine = (component) => {
  if (!component) return null
  const { lineStyle } = component

  const line = { borderBottom: lineStyle || '2px solid black'}

  const styles = {
    ...line,
    minHeight: '2px'
  }
  return <div style={styles} />
}

export default createLine

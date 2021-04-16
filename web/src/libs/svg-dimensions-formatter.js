const svgDimensionsFormatter = (svg) => {
  const svgProps = svg().props
  const { width, height, viewBox } = svgProps

  if (width && height) return { width, height }

  if (viewBox) {
    const viewBoxSplit = viewBox.split(' ')
    return {
      width: parseInt(viewBoxSplit[2], 10),
      height: parseInt(viewBoxSplit[3], 10)
    }
  }

  return {
    width: 0,
    height: 0
  }
}

export default svgDimensionsFormatter

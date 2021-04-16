const ratingToColor = (rating) => {
  if (typeof rating !== 'string') return

  const colorMap = {
    U: 'green',
    PG: 'yellow',
    '12': 'orange',
    '12A': 'orange',
    '15': 'pink',
    '18': 'red'
  }

  return colorMap[rating]
}

export default ratingToColor

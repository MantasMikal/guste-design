const stringToColor = (string) => {
  if (typeof string !== 'string') return

  let hash = 0
  let colour = '#'

  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }
  for (let i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff
    colour += ('00' + value.toString(16)).substr(-2)
  }

  return colour
}

export default stringToColor

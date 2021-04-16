const stringToInitials = (string) => {
  if (typeof string !== 'string') return

  return string
    .split(/[ '’-]/g)
    .map((word) => word[0].toUpperCase())
    .join('')
}

export default stringToInitials

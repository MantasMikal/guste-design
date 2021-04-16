const shallowObjectToQuery = (obj) => {
  if (!obj || typeof obj !== 'object') return

  return Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&')
}

export default shallowObjectToQuery

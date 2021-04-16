import { useState, useEffect } from 'react'
import { window } from 'browser-monads'

// Hook for media queries
// const isTablet = useMedia('(max-width: 960px)')

function useMedia(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches)
  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    media.addListener(listener)

    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}

export default useMedia

import { useEffect } from 'react'

const useEscapeKey = (callback) => {
  useEffect(() => {
    if (typeof callback !== 'function') return

    const handleKeyDown = (e) => {
      if (e.keyCode === 27) {
        callback(e)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [callback])
}

export default useEscapeKey

import { useEffect } from 'react'

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    if (typeof callback !== 'function') return

    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback(e)
      }
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  }, [ref, callback])
}

export default useOutsideClick

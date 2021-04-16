import { useLayoutEffect, useState } from 'react'

const useDimensions = ({ ref, enableResize }) => {
  const [dimensions, setDimensions] = useState({})
  useLayoutEffect(() => {
    const measure = () => {
      setDimensions(ref.current.getBoundingClientRect().toJSON())
    }
    measure()

    if (enableResize) {
      window.addEventListener('resize', measure)

      return () => {
        window.removeEventListener('resize', measure)
      }
    }
  }, [ref, enableResize])

  return dimensions
}

export default useDimensions

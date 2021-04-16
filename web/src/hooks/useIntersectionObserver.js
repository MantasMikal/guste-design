import { useEffect } from 'react'

const useIntersectionObserver = ({
  onIntersect,
  root = document.body,
  rootMargin = '0px',
  target,
  threshold = 1.0
}) => {
  useEffect(() => {
    if (!root) return
    if (!target) return

    const targetCurrent = target.current
    const observer = new IntersectionObserver(onIntersect, {
      root: root.current,
      rootMargin,
      threshold
    })

    observer.observe(targetCurrent)

    return () => {
      observer.unobserve(targetCurrent)
    }
  })
}

export default useIntersectionObserver

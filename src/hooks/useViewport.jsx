import { useState, useMemo, useEffect } from 'react'

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  const options = {
    rootMargin: '100px',
    threshold: 1.0,
  }

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
        console.log(entry)
      }, options),
    [ref]
  )

  useEffect(() => {
    observer.observe(ref.current)
    console.log(ref.current)
    return () => observer.disconnect()
  }, [])

  return isIntersecting
}

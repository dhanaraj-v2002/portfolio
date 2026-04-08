import { useEffect, useRef, useState } from 'react'

/**
 * useInView — triggers when element enters the viewport
 * @param {number} threshold - 0..1, how much of element must be visible
 * @param {boolean} once - only trigger once (default true)
 */
export function useInView(threshold = 0.15, once = true) {
  const ref       = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, inView]
}

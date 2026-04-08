import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const raf     = useRef(null)

  useEffect(() => {
    // Hide on touch devices
    if (!window.matchMedia('(hover: hover)').matches) return

    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`
      }
    }

    const lerp = () => {
      const p = pos.current
      p.rx += (p.mx - p.rx) * 0.12
      p.ry += (p.my - p.ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${p.rx}px, ${p.ry}px) translate(-50%,-50%)`
      }
      raf.current = requestAnimationFrame(lerp)
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(lerp)

    // Grow on interactive elements
    const grow = () => {
      if (!ringRef.current || !dotRef.current) return
      ringRef.current.style.width  = '54px'
      ringRef.current.style.height = '54px'
      ringRef.current.style.borderColor = 'var(--coral)'
      dotRef.current.style.background   = 'var(--coral)'
    }
    const shrink = () => {
      if (!ringRef.current || !dotRef.current) return
      ringRef.current.style.width  = '32px'
      ringRef.current.style.height = '32px'
      ringRef.current.style.borderColor = 'var(--cyan)'
      dotRef.current.style.background   = 'var(--cyan)'
    }

    const targets = document.querySelectorAll('a, button, .card-hover')
    targets.forEach(el => { el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink) })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      targets.forEach(el => { el.removeEventListener('mouseenter', grow); el.removeEventListener('mouseleave', shrink) })
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}

import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { stats } from '../data/portfolio'
import styles from './Stats.module.css'

function Counter({ target, decimal, inView }) {
  const [val, setVal] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const duration = 1800
    const start = performance.now()
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setVal(decimal ? (target * ease).toFixed(1) : Math.floor(target * ease))
      if (p < 1) requestAnimationFrame(step)
      else setVal(decimal ? target.toFixed(1) : target)
    }
    requestAnimationFrame(step)
  }, [inView, target, decimal])

  return <>{val}</>
}

export default function Stats() {
  const [ref, inView] = useInView(0.3)

  return (
    <div className={styles.bar} ref={ref}>
      <div className={styles.inner}>
        {stats.map((s, i) => (
          <>
            <div className={styles.item} key={s.label}>
              <div className={styles.top}>
                <span className={styles.num}>
                  <Counter target={s.num} decimal={s.decimal} inView={inView} />
                </span>
                <span className={styles.unit}>{s.unit}</span>
              </div>
              <p className={styles.label}>{s.label}</p>
            </div>
            {i < stats.length - 1 && <div className={styles.divider} key={`d${i}`} />}
          </>
        ))}
      </div>
    </div>
  )
}

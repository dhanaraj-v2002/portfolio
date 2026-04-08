import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { education } from '../data/portfolio'
import styles from './Education.module.css'

export default function Education() {
  const [ref, inView] = useInView(0.15)

  return (
    <section className={`section ${styles.edu}`} id="education" ref={ref}>
      <div className="container">
        <p className="section-tag">// education</p>
        <h2 className="section-title">
          Academic <span className="accent-cyan">Background</span>
        </h2>
        <div className={styles.grid}>
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              className={`${styles.card} card-hover`}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.23,1,0.32,1] }}
            >
              <p className={styles.period}>{e.period}</p>
              <span className={`${styles.badge} ${styles[e.status]}`}>
                {e.status === 'pursuing' ? 'Pursuing' : 'Completed'}
              </span>
              <h3 className={styles.degree}>{e.degree}</h3>
              <p className={styles.uni}>{e.uni}</p>
              <p className={styles.desc}>{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

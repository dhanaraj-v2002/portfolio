import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { experience } from '../data/portfolio'
import styles from './Experience.module.css'

export default function Experience() {
  const [ref, inView] = useInView(0.1)

  return (
    <section className={`section ${styles.exp}`} id="experience" ref={ref}>
      <div className="container">
        <motion.p className="section-tag"
          initial={{ opacity:0, y:20 }} animate={inView ? {opacity:1,y:0} : {}} transition={{duration:0.5}}>
          // work_history
        </motion.p>
        <motion.h2 className="section-title"
          initial={{ opacity:0, y:20 }} animate={inView ? {opacity:1,y:0} : {}} transition={{duration:0.5, delay:0.05}}>
          Professional <span className="accent-cyan">Experience</span>
        </motion.h2>

        <div className={styles.timeline}>
          <div className={styles.line} />
          {experience.map((job, i) => (
            <motion.div key={job.role + job.company} className={styles.item}
              initial={{ opacity:0, x:-30 }}
              animate={inView ? {opacity:1, x:0} : {}}
              transition={{ duration:0.6, delay: 0.15 + i*0.1, ease:[0.23,1,0.32,1] }}
            >
              <div className={styles.dot} />
              <p className={styles.date}>{job.period}</p>
              <div className={`${styles.card} card-hover`}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{job.role}</h3>
                    <p className={styles.company}>{job.company}</p>
                  </div>
                  <span className={styles.badge}>{job.type}</span>
                </div>
                <div className={styles.tech}>
                  {job.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <ul className={styles.bullets}>
                  {job.bullets.map((b, bi) => (
                    <li key={bi} dangerouslySetInnerHTML={{ __html: b }} />
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

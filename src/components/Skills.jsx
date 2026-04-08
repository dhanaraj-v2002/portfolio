import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { skills, certifications } from '../data/portfolio'
import styles from './Skills.module.css'

export default function Skills() {
  const [ref, inView] = useInView(0.1)

  return (
    <section className={`section ${styles.skills}`} id="skills" ref={ref}>
      <div className="container">
        <p className="section-tag">// technical_arsenal</p>
        <h2 className="section-title">
          Skills & <span className="accent-coral">Technologies</span>
        </h2>

        <div className={styles.grid}>
          {skills.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className={`${styles.category} card-hover`}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.07, ease: [0.23,1,0.32,1] }}
            >
              <div className={styles.catHeader}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <h3 className={styles.catTitle}>{cat.title}</h3>
              </div>
              <div className={styles.tags}>
                {cat.primary.map(t   => <span key={t} className={`${styles.tag} ${styles.primary}`}>{t}</span>)}
                {cat.secondary.map(t => <span key={t} className={`${styles.tag} ${styles.secondary}`}>{t}</span>)}
                {cat.tertiary.map(t  => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className={styles.certLabel}>// certifications</p>
          <div className={styles.certList}>
            {certifications.map(c => (
              <div key={c.name} className={`${styles.certBadge} card-hover`}>
                <div className={`${styles.certLogo} ${styles[c.type]}`}>{c.abbr}</div>
                <div>
                  <p className={styles.certName}>{c.name}</p>
                  <p className={styles.certIssuer}>{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { personal, aboutCards } from '../data/portfolio'
import styles from './About.module.css'

const tags = ['☁️ AWS Architect', '🐳 Container Specialist', '⚙️ IaC Evangelist', '🔒 DevSecOps']

export default function About() {
  const [ref, inView] = useInView(0.15)

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.23,1,0.32,1] },
  })

  return (
    <section className={`section ${styles.about}`} id="about" ref={ref}>
      <div className="container">
        <motion.p className="section-tag" {...fade(0)}>// about_me</motion.p>
        <div className={styles.grid}>
          <motion.div {...fade(0.05)}>
            <h2 className="section-title">
              Building Infrastructure<br />
              <span className="accent-cyan">That Never Sleeps</span>
            </h2>
            <p className={styles.para}>
              Results-driven DevOps Engineer at <strong>{personal.company}</strong> with 3.8 years designing high-availability,
              scalable microservices architectures and secure cloud infrastructure for production SaaS platforms on AWS.
            </p>
            <p className={styles.para}>
              {personal.highlight} I specialize in reducing friction between development and production through robust automation, GitOps, and DevSecOps practices.
            </p>
            <div className={styles.tags}>
              {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          </motion.div>

          <div className={styles.cards}>
            {aboutCards.map((c, i) => (
              <motion.div key={c.title} className={`${styles.card} card-hover`} {...fade(0.1 + i * 0.07)}>
                <div className={styles.cardIcon}>{c.icon}</div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

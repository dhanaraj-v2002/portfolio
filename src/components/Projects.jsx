import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

function ProjectCard({ project, delay }) {
  const cardRef = useRef(null)

  const onMouseMove = (e) => {
    const el   = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x    = (e.clientX - rect.left) / rect.width  - 0.5
    const y    = (e.clientY - rect.top)  / rect.height - 0.5
    el.style.transform = `translateY(-5px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`
  }
  const onMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transition = 'transform 0.6s ease'
      cardRef.current.style.transform  = ''
      setTimeout(() => { if (cardRef.current) cardRef.current.style.transition = '' }, 600)
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={`${styles.card} ${project.featured ? styles.featured : ''}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className={styles.glow} />
      <span className={styles.num}>{project.num}</span>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {project.title.split('\n').map((line, i) => (
            <span key={i}>{line}{i < project.title.split('\n').length - 1 && <br />}</span>
          ))}
        </h3>
        <p className={styles.desc}>{project.desc}</p>
        <ul className={styles.highlights}>
          {project.highlights.map(h => <li key={h}>{h}</li>)}
        </ul>
        <div className={styles.tech}>
          {project.tech.map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView(0.1)

  return (
    <section className={`section ${styles.projects}`} id="projects" ref={ref}>
      <div className="container">
        <p className="section-tag">// key_projects</p>
        <h2 className="section-title">
          Featured <span className="accent-coral">Projects</span>
        </h2>
        <div className={styles.grid}>
          {inView && projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

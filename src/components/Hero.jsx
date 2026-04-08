import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { personal, orbitBadges, terminalLines } from '../data/portfolio'
import styles from './Hero.module.css'

function Typewriter({ lines }) {
  const [text,    setText]    = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting,setDeleting]= useState(false)

  useEffect(() => {
    const current = lines[lineIdx]
    let timeout
    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => { setText(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1) }, 80)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => { setText(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1) }, 45)
      } else {
        setDeleting(false)
        setLineIdx(i => (i + 1) % lines.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, lineIdx, lines])

  return <span>{text}<span className={styles.cursor}>▋</span></span>
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item      = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23,1,0.32,1] } } }

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.gridLines} />

      <motion.div
        className={styles.content}
        variants={container} initial="hidden" animate="show"
      >
        {/* Badge */}
        <motion.div className={styles.badge} variants={item}>
          <span className={styles.badgeDot} />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.p className={styles.eyebrow} variants={item}>Hello, I'm</motion.p>
        <motion.h1 className={styles.name} variants={item}>
          Dhanaraj
        </motion.h1>

        {/* Terminal */}
        <motion.div className={styles.terminal} variants={item}>
          <div className={styles.termBar}>
            <span className={`${styles.dot} ${styles.red}`}    />
            <span className={`${styles.dot} ${styles.yellow}`} />
            <span className={`${styles.dot} ${styles.green}`}  />
            <span className={styles.termTitle}>dhanaraj@devops ~ $</span>
          </div>
          <div className={styles.termBody}>
            <p className={styles.tLine}><span className={styles.prompt}>$</span> whoami</p>
            <p className={styles.tOutput}><Typewriter lines={terminalLines} /></p>
            <p className={styles.tLine}><span className={styles.prompt}>$</span> uptime</p>
            <p className={styles.tOutput}>3.8 years · AWS · Kubernetes · Terraform · CI/CD</p>
            <p className={styles.tLine}><span className={styles.prompt}>$</span> status</p>
            <p className={`${styles.tOutput} ${styles.tGreen}`}>✓ Systems operational · HCL Technologies</p>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div className={styles.actions} variants={item}>
          <a href="#projects" className="btn-primary"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' }) }}>
            View My Work
          </a>
          <a href={personal.resumeUrl} download className="btn-ghost">Download CV</a>
        </motion.div>

        {/* Socials */}
        <motion.div className={styles.socials} variants={item}>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href={`mailto:${personal.email}`} className={styles.socialLink} aria-label="Email">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Orbit Visual */}
      <motion.div
        className={styles.visual}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
      >
        <div className={`${styles.ring} ${styles.ring1}`} />
        <div className={`${styles.ring} ${styles.ring2}`} />
        <div className={`${styles.ring} ${styles.ring3}`} />
        <div className={styles.center}>
          <div className={styles.avatar}>DV</div>
        </div>
        {orbitBadges.map((badge, i) => (
          <div key={badge} className={`${styles.badge2} ${styles[`ob${i+1}`]}`}
            style={{ animationDelay: `${i * 0.4}s` }}>
            {badge}
          </div>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}

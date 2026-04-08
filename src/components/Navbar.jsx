import { useState, useEffect } from 'react'
import { personal } from '../data/portfolio'
import styles from './Navbar.module.css'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
  }, [open])

  const scrollTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <h6> Dhanaraj V </h6>
        <h6> DevOps Engineer | AWS • Terraform • Docker • Kubernetes • CI/CD </h6>
      </div>

      <ul className={styles.links}>
        {links.map(l => (
          <li key={l}>
            <button className={styles.link} onClick={() => scrollTo(l)}>{l}</button>
          </li>
        ))}
      </ul>

      <a href={`mailto:${personal.email}`} className={styles.cta}>Hire Me</a>

      <button
        className={`${styles.hamburger} ${open ? styles.hOpen : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile menu */}
      <div className={`${styles.mobile} ${open ? styles.mOpen : ''}`}>
        <ul>
          {links.map((l, i) => (
            <li key={l} style={{ animationDelay: `${i * 0.06}s` }}>
              <button className={styles.mobLink} onClick={() => scrollTo(l)}>{l}</button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

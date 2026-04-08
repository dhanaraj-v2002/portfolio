import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.bracket}>[</span>DV<span className={styles.bracket}>]</span>
          {' '}Dhanaraj V
        </div>
        <p className={styles.copy}>© {new Date().getFullYear()} Dhanaraj V. Built with ❤️ + ⚙️</p>
        <p className={styles.stack}>React · Vite · Framer Motion</p>
      </div>
    </footer>
  )
}

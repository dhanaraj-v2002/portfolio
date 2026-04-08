import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          
        </div>
        <p className={styles.copy}>© {new Date().getFullYear()} Dhanaraj V. DevOps Portfolio</p>
        <p className={styles.stack}>React · Vite · Framer Motion</p>
      </div>
    </footer>
  )
}

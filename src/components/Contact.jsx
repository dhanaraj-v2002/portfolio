import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { personal } from '../data/portfolio'
import styles from './Contact.module.css'

const contactItems = [
  { icon: '✉',  label: 'Email',    value: 'dhanarajv1310@gmail.com',  href: `mailto:${personal.email}` },
  { icon: '☎',  label: 'Phone',    value: '+91 9524579105',            href: `tel:${personal.phone}` },
  { icon: 'in', label: 'LinkedIn', value: personal.linkedinHandle,     href: personal.linkedin, external: true },
  {
    label: 'GitHub', value: personal.githubHandle, href: personal.github, external: true,
    svgIcon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
  },
]

export default function Contact() {
  const [ref, inView] = useInView(0.15)

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, delay, ease: [0.23,1,0.32,1] },
  })

  return (
    <section className={`section ${styles.contact}`} id="contact" ref={ref}>
      <div className="container">
        <motion.p className="section-tag" {...fade()}>// get_in_touch</motion.p>
        <motion.h2 className="section-title" {...fade(0.05)}>
          Let's <span className="accent-coral">Connect</span>
        </motion.h2>
        <motion.p className={styles.sub} {...fade(0.1)}>
          Open to new opportunities in Chennai or Bengaluru (3-month notice period).<br />
          Let's build something great together.
        </motion.p>

        <div className={styles.grid}>
          {/* Links */}
          <motion.div className={styles.links} {...fade(0.15)}>
            {contactItems.map(c => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noreferrer' : undefined}
                className={`${styles.item} card-hover`}
              >
                <div className={styles.icon}>
                  {c.svgIcon ?? c.icon}
                </div>
                <div className={styles.text}>
                  <span className={styles.label}>{c.label}</span>
                  <span className={styles.value}>{c.value}</span>
                </div>
                <span className={styles.arrow}>→</span>
              </a>
            ))}
          </motion.div>

          {/* CTA box */}
          <motion.div {...fade(0.2)}>
            <div className={styles.terminal}>
              <p><span className={styles.prompt}>$</span> cat relocation.txt</p>
              <p className={styles.out}>Open to: Chennai, Bengaluru</p>
              <p><span className={styles.prompt}>$</span> cat notice_period.txt</p>
              <p className={styles.out}>3 months notice required</p>
              <p><span className={styles.prompt}>$</span> cat languages.txt</p>
              <p className={styles.out}>English, Tamil</p>
              <p className={styles.cursor}>▋</p>
            </div>
            <a href={`mailto:dhanarajv1310@gmail.com`} className={`btn-primary ${styles.cta}`}>
              Send Message 🚀
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

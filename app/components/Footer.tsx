'use client'

import Link from 'next/link'
import styles from './Footer.module.scss'
import { infoLinks, site } from '../data/site'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Full width divider */}
      <div className={styles.footerDivider} />

      <div className={styles.footerContent}>
        {/* Navigation */}
        <nav className={styles.footerNav}>
          {infoLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`${styles.pill} ${link.accent ? styles.pinkPill : ''}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact */}
        <div className={styles.footerContact}>
          <a
            href={`mailto:${site.email}`}
            className={styles.footerEmail}
          >
            {site.email}
          </a>

          <p className={styles.footerLocation}>
            {site.location}
            
          </p>

          <div className={styles.footerLegal}>
            <p>CVR: {site.cvr}</p>
            <p>© {new Date().getFullYear()} {site.copyrightName}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

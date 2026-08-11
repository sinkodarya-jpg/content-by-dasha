'use client'

import Link from 'next/link'
import styles from './Intro.module.scss'
import { infoLinks, site } from '../data/site'

export default function Intro() {
  return (
<div className={styles.intro}>
  <p
        className={styles.introText}
      >
        {site.intro.map((paragraph, index) => (
          <span key={paragraph}>
            {paragraph}
            {index < site.intro.length - 1 && <><br /><br /></>}
          </span>
        ))}
      </p>

      <div className={styles.pillGroup}>

        {infoLinks.map((link) => (
          <Link key={link.href} href={link.href} className={`${styles.pill} ${link.accent ? styles.pinkPill : ''}`}>
            {link.label}
          </Link>
        ))}

      </div>
    </div>
  )
}

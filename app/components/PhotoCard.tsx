'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './PhotoCard.module.scss'

type PhotoCardProps = {
  id: string
  title: string
  collageSrc: string
  productImageSrc: string
  instagramUrl?: string
}

export default function PhotoCard({
  id,
  title,
  collageSrc,
  productImageSrc,
  instagramUrl,
}: PhotoCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardMeta}>
        {instagramUrl && (
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={styles.instagramLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
        )}
      </div>
      <Link href={`/projects/${id}`} className={styles.cardLink}>
        <div className={styles.photoVisual}>
          <Image src={collageSrc} alt={title} fill sizes="33vw" className={styles.coverImage} />
          <div className={styles.photoProduct}>
            <Image src={productImageSrc} alt={title} width={0} height={0} sizes="25vw" className={styles.productImage} />
          </div>
        </div>
        <p className={styles.cardTitle}>{title}</p>
      </Link>
    </article>
  )
}

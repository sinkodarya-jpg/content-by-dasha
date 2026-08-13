'use client'

import Image from 'next/image'
import styles from './ProjectCard.module.scss'

type ProjectCardProps = {
  title: string
  videoSrc: string
  videoOrientation: 'vertical' | 'horizontal'
  productImageSrc: string
  instagramUrl?: string
}

export default function ProjectCard({
  title,
  videoSrc,
  videoOrientation,
  productImageSrc,
  instagramUrl,
}: ProjectCardProps) {
  return (
    <article className={styles.projectCard}>
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
      {/* Restore the project link when the detail pages are ready. */}
      <div className={styles.projectCardLink}>
        {videoOrientation === 'vertical' ? (
          <div className={styles.verticalProject}>
            <div className={styles.verticalProduct}>
              <Image src={productImageSrc} alt={title} width={0} height={0} priority sizes="40vw" className={styles.verticalProductImage} />
              <p className={styles.verticalTitle}>{title}</p>
            </div>
            <div className={styles.verticalVideo}>
              <video src={videoSrc} autoPlay loop muted playsInline className={styles.coverImage} />
            </div>
          </div>
        ) : (
          <div className={styles.horizontalProject}>
            <div className={styles.horizontalVideo}>
              <video src={videoSrc} autoPlay loop muted playsInline className={styles.coverImage} />
            </div>
            <div className={styles.horizontalProduct}>
              <Image src={productImageSrc} alt={title} width={0} height={0} sizes="40vw" className={styles.productImage} />
            </div>
            <p className={styles.horizontalTitle}>{title}</p>
          </div>
        )}
      </div>
    </article>
  )
}

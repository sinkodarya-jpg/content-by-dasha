'use client'

import Image from 'next/image'
import styles from './ShowcaseCard.module.scss'

type ShowcaseCardProps = {
  id: string
  title: string
  videoSrc: string
  productImageSrc: string
  overlaySrc: string
  instagramUrl?: string
}

export default function ShowcaseCard({
  id,
  title,
  videoSrc,
  productImageSrc,
  overlaySrc,
  instagramUrl,
}: ShowcaseCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardMeta}>
        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={styles.instagramLink}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="0.5"
                fill="currentColor"
              />
            </svg>
          </a>
        )}
      </div>

      <div className={styles.cardLink}>
        <div className={styles.showcaseVisual}>
          <div className={styles.showcaseVideo}>
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className={styles.coverImage}
            />
          </div>

          <Image
            src={overlaySrc}
            alt=""
            fill
            sizes="33vw"
            className={styles.showcaseOverlay}
          />

          <div className={styles.showcaseProduct}>
            <Image
              src={productImageSrc}
              alt={title}
              width={0}
              height={0}
              sizes="25vw"
              className={styles.productImage}
            />

            <p className={styles.cardTitle}>
             ({id})&nbsp;{title}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
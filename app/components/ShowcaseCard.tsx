'use client'

import Link from 'next/link'
import Image from 'next/image'

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
    <article className="flex flex-col">
      <div className="flex justify-end h-6 mb-4">
        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="hover:opacity-60 transition"
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
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
        )}
      </div>

      <Link href={`/projects/${id}`} className="block">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
          {/* Видео */}
          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[32%] aspect-[9/16] rounded-xl overflow-hidden z-10">
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Декоративный PNG */}
          <Image
            src={overlaySrc}
            alt=""
            fill
            sizes="33vw"
            className="object-contain pointer-events-none z-20"
          />

          {/* Сумка + подпись */}
          <div className="absolute left-0 top-0 w-[55%] z-30 flex flex-col">
            <Image
              src={productImageSrc}
              alt={title}
              width={0}
              height={0}
              sizes="25vw"
              className="w-full h-auto"
            />

            <p className="mt-3 text-sm lowercase tracking-wide">
              {title}
            </p>
          </div>
        </div>
      </Link>
    </article>
  )
}
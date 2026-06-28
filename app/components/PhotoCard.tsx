'use client'

import Link from 'next/link'
import Image from 'next/image'

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
    <article className="flex flex-col">
      <div className="flex justify-end h-6 mb-4">
        {instagramUrl && (
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:opacity-60 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
        )}
      </div>
      <Link href={`/projects/${id}`} className="block">
        <div className="relative w-full aspect-square  overflow-hidden">
          <Image src={collageSrc} alt={title} fill sizes="33vw" className="object-cover" />
          <div className="absolute left-0 top-0 w-[55%] h-full flex items-center z-10">
            <Image src={productImageSrc} alt={title} width={0} height={0} sizes="25vw" className="w-full h-auto" />
          </div>
        </div>
        <p className="mt-3 text-sm lowercase tracking-wide">{title}</p>
      </Link>
    </article>
  )
}
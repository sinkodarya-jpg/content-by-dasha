'use client'

import Link from 'next/link'
import Image from 'next/image'

type ProjectCardProps = {
  id: string
  title: string
  videoSrc: string
  videoOrientation: 'vertical' | 'horizontal'
  productImageSrc: string
  instagramUrl?: string
}

export default function ProjectCard({
  id,
  title,
  videoSrc,
  videoOrientation,
  productImageSrc,
  instagramUrl,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col overflow-visible">
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
      <Link href={`/projects/${id}`} className="block overflow-visible">
        {videoOrientation === 'vertical' ? (
          <div className="grid grid-cols-[45%_55%] items-start overflow-visible">
            <div className="relative z-10 flex flex-col">
              <Image src={productImageSrc} alt={title} width={0} height={0} priority sizes="40vw" className="w-[145%] max-w-none h-auto -translate-x-8 translate-y-4" />
              <p className="mt-1 text-sm lowercase tracking-wide">{title}</p>
            </div>
            <div className="aspect-[9/16] overflow-hidden rounded-2xl">
              <video src={videoSrc} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl">
              <video src={videoSrc} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 w-[80%] mt-[-20%]">
              <Image src={productImageSrc} alt={title} width={0} height={0} sizes="40vw" className="w-full h-auto" />
            </div>
            <p className="mt-2 text-sm lowercase tracking-wide">{title}</p>
          </div>
        )}
      </Link>
    </article>
  )
}

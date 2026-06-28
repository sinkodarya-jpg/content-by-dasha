'use client'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

export default function Intro() {
  return (
    <div className="w-full lg:w-[45%] py-0 md:py-12">
      <p
        className={`${inter.className} text-[14px] md:text-[15px] leading-5 font-normal text-black`}
      >
        i'm dasha — a content creator from denmark.
        <br />
        <br />
        creating cozy lifestyle content inspired by home, coffee,
        copenhagen's streets and everyday moments
        <br />
        <br />
        explore my latest collaborations below, and let's work together!
      </p>

      <a
        href="/media-kit#contact"
        className="inline-block mt-6 md:mt-8 px-5 py-2 text-sm lowercase tracking-wide border border-black rounded-full text-black bg-white hover:bg-black hover:text-white transition-colors duration-200"
      >
        contact me
      </a>
    </div>
  )
}
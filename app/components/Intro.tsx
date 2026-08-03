'use client'

import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

export default function Intro() {
  return (
<div className="w-full py-8 md:w-[45%] md:py-24">      
  <p
        className={`${inter.className} text-[14px] leading-5 font-normal text-black md:text-[15px]`}
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

      <div className="mt-6 flex flex-wrap gap-3 md:mt-8">

        <Link
          href="/info?tab=prices"
          className="
            rounded-full
            border
            border-black
            px-5
            py-2
            text-sm
            lowercase
            transition-colors
            duration-300
            hover:bg-neutral-100
          "
        >
          prices
        </Link>

        <Link
          href="/info?tab=metrics"
          className="
            rounded-full
            border
            border-black
            px-5
            py-2
            text-sm
            lowercase
            transition-colors
            duration-300
            hover:bg-neutral-100
          "
        >
          metrics
        </Link>

        <Link
          href="/info?tab=contacts"
          className="
            rounded-full
            border
            border-black
            bg-[#f7dfe5]
            px-5
            py-2
            text-sm
            lowercase
            transition-colors
            duration-300
            hover:bg-[#f2cfd8]
          "
        >
          contact me
        </Link>

      </div>
    </div>
  )
}
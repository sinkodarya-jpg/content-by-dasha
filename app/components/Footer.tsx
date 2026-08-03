'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-28">
      {/* Full width divider */}
      <div className="relative left-1/2 mb-12 w-screen -translate-x-1/2 border-t border-black" />

      <div className="mx-auto flex w-full max-w-[1600px] flex-col justify-between gap-14 px-4 pb-14 md:flex-row md:items-end md:px-8">
        {/* Navigation */}
        <nav className="flex flex-col items-start gap-3">
          <Link
            href="/info?tab=prices"
            className="rounded-full border border-black px-5 py-2 text-sm lowercase transition-colors duration-300 hover:bg-neutral-100"
          >
            prices
          </Link>

          <Link
            href="/info?tab=metrics"
            className="rounded-full border border-black px-5 py-2 text-sm lowercase transition-colors duration-300 hover:bg-neutral-100"
          >
            metrics
          </Link>

          <Link
            href="/info?tab=contacts"
            className="rounded-full border border-black bg-[#f7dfe5] px-5 py-2 text-sm lowercase transition-colors duration-300 hover:bg-[#f2cfd8]"
          >
            contact me
          </Link>
        </nav>

        {/* Contact */}
        <div className="text-left md:text-right">
          <a
            href="mailto:tookbydasha@gmail.com"
            className="text-2xl font-bold transition-opacity duration-300 hover:opacity-70"
          >
            tookbydasha@gmail.com
          </a>

          <p className="mt-5 text-sm leading-relaxed text-neutral-500">
            based in denmark
            <br />
            currently accepting
            <br />
            new collaborations ✿
          </p>

          <div className="mt-8 text-xs leading-relaxed text-neutral-400">
            <p>CVR: 12345678</p>
            <p>© {new Date().getFullYear()} Dasha Sinko</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
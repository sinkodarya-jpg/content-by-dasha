'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { label: 'Projects', href: '/' },
  { label: 'Media Kit', href: '/media-kit' },
  { label: 'About Me', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center px-6 py-3">
      <div className="hidden md:block flex-1" />

      <Link href="/" onClick={handleLogoClick}>
        <Image
          src="/images/logo.svg"
          alt="content by dasha"
          width={400}
          height={60}
          priority
          className="w-[250px] md:w-[400px]"
        />
      </Link>

      <div className="flex-1 flex justify-end">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1 p-1 z-50"
        >
          <span className="block w-5 h-px bg-black" />
          <span className="block w-5 h-px bg-black" />
          <span className="block w-5 h-px bg-black" />
        </button>
      </div>

      {/* Desktop */}
      <div
        className={`
          hidden md:flex
          fixed top-0 right-0 h-screen
          w-[280px]
          bg-white border-l
          flex-col
          pt-28 px-10 gap-6
          transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`text-sm lowercase tracking-wide transition-opacity hover:opacity-60 ${
              pathname === item.href ? 'opacity-30' : 'opacity-100'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white border-t flex flex-col px-6 py-4 gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm lowercase tracking-wide transition-opacity ${
                pathname === item.href ? 'opacity-30' : 'opacity-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
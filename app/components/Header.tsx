'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navItems = [
  {
    label: 'Projects',
    href: '/',
  },
  {
    label: 'Prices',
    href: '/info?tab=prices',
  },
  {
    label: 'Metrics',
    href: '/info?tab=metrics',
  },
  {
    label: 'Contacts',
    href: '/info?tab=contacts',
  },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    setMenuOpen(false)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/10 transition-opacity duration-300 ${
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      />

      <header className="fixed left-0 right-0 top-0 z-[100] bg-white">

        <div className="flex items-center px-6 py-3">

          <div className="hidden flex-1 md:block" />

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

          <div className="flex flex-1 justify-end">

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="relative z-[110] flex h-10 w-10 items-center justify-center"
              aria-label="Toggle menu"
            >
              {/* Top */}
              <span
                className={`absolute block h-px w-5 bg-black transition-all duration-300 ${
                  menuOpen
                    ? 'rotate-45'
                    : '-translate-y-[6px]'
                }`}
              />

              {/* Middle */}
              <span
                className={`absolute block h-px w-5 bg-black transition-all duration-200 ${
                  menuOpen
                    ? 'scale-x-0 opacity-0'
                    : 'scale-x-100 opacity-100'
                }`}
              />

              {/* Bottom */}
              <span
                className={`absolute block h-px w-5 bg-black transition-all duration-300 ${
                  menuOpen
                    ? '-rotate-45'
                    : 'translate-y-[6px]'
                }`}
              />
            </button>

          </div>

        </div>

        {/* Mobile */}
        <nav
          className={`
            overflow-hidden
            border-t
            bg-white
            transition-all
            duration-300
            ease-out
            md:hidden
            ${
              menuOpen
                ? 'max-h-[600px] opacity-100'
                : 'max-h-0 border-transparent opacity-0'
            }
          `}
        >
          <div className="px-6 py-8">

            <div className="flex flex-col">

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="py-3 text-[28px] lowercase leading-none tracking-tight"
                >
                  {item.label}
                </Link>
              ))}

              <div className="my-6 border-t border-neutral-200" />

              <a
                href="mailto:tookbydasha@gmail.com"
                onClick={closeMenu}
                className="py-3 text-[28px] font-semibold leading-none tracking-tight"
              >
                tookbydasha@gmail.com
              </a>

            </div>

          </div>
        </nav>

      </header>

      {/* Desktop */}
      <aside
        className={`
          fixed right-0 top-0 z-[90] hidden h-screen w-[300px]
          flex-col bg-white
          px-10 pt-28
          transition-transform duration-300 ease-out
          md:flex
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <nav className="flex flex-col gap-6">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-sm lowercase tracking-wide transition-opacity duration-300 hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}

        </nav>

        <div className="my-10 border-t border-neutral-200" />

        <a
          href="mailto:tookbydasha@gmail.com"
          className="text-base font-semibold tracking-tight transition-opacity duration-300 hover:opacity-60"
        >
          tookbydasha@gmail.com
        </a>

      </aside>

    </>
  )
}
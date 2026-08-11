'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import { navigationItems, site } from '../data/site'

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
        className={`${styles.menuBackdrop} ${menuOpen ? styles.menuBackdropOpen : ''}`}
      />

      <header className={styles.header}>

        <div className={styles.headerBar}>

          <div className={styles.headerSpacer} />

          <Link href="/" onClick={handleLogoClick}>
            <Image
              src="/images/logo.svg"
              alt="content by dasha"
              width={400}
              height={60}
              priority
              className={styles.logo}
            />
          </Link>

          <div className={styles.menuButtonWrap}>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className={styles.menuButton}
              aria-label="Toggle menu"
            >
              {/* Top */}
              <span
                className={`${styles.menuLine} ${menuOpen ? styles.menuTopOpen : styles.menuTopClosed}`}
              />

              {/* Middle */}
              <span
                className={`${styles.menuLine} ${menuOpen ? styles.menuMiddleOpen : ''}`}
              />

              {/* Bottom */}
              <span
                className={`${styles.menuLine} ${menuOpen ? styles.menuBottomOpen : styles.menuBottomClosed}`}
              />
            </button>

          </div>

        </div>

        {/* Mobile */}
        <nav
          className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        >
          <div className={styles.mobileMenuContent}>

            <div className={styles.mobileNav}>

              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
className={styles.mobileNavLink}>
                  {item.label}
                </Link>
              ))}

              <div className={styles.navDivider} />

              <a
  href={`mailto:${site.email}`}
  onClick={closeMenu}
  className={styles.mobileEmail}
>
  {site.email}
</a>

            </div>

          </div>
        </nav>

      </header>

      {/* Desktop */}
      <aside
        className={`${styles.desktopMenu} ${menuOpen ? styles.desktopMenuOpen : ''}`}
      >
        <nav className={styles.desktopNav}>

          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
className={styles.desktopNavLink}>
              {item.label}
            </Link>
          ))}

        </nav>

        <div className={styles.navDivider} />

        <a
          href={`mailto:${site.email}`}
className={styles.desktopEmail}>
          {site.email}
        </a>

      </aside>

    </>
  )
}

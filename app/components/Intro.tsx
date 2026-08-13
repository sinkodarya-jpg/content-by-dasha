'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Intro.module.scss'
import { introFolders, site } from '../data/site'

const INSTAGRAM_URL = 'https://www.instagram.com/tookbydasha/'
const EMAIL = 'YOUR_EMAIL@example.com'

type SidebarIconName =
  | 'recents'
  | 'shared'
  | 'applications'
  | 'desktop'
  | 'documents'
  | 'downloads'

function SidebarIcon({ name }: { name: SidebarIconName }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.65,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  const icons = {
    recents: (
      <>
        <circle cx="10" cy="10" r="6.5" {...common} />
        <path d="M10 5.9v4.35l2.8 1.65" {...common} />
      </>
    ),
    shared: (
      <>
        <path d="M2.9 6.5h5l1.35-1.75h3.15c.8 0 1.25.36 1.6 1.1l.25.65" {...common} />
        <path d="M3.05 7.1h10.15c.9 0 1.4.62 1.2 1.5l-.88 4.05c-.15.75-.63 1.1-1.4 1.1H3.9c-.82 0-1.25-.42-1.08-1.25l.95-4.25c.13-.7.55-1.15 1.28-1.15Z" {...common} />
        <circle cx="13.7" cy="12.05" r="1.3" fill="currentColor" stroke="none" />
        <path d="M11.75 15.05c.35-1.15 1.02-1.72 1.95-1.72.92 0 1.58.57 1.94 1.72" {...common} />
      </>
    ),
    applications: (
      <>
        <path d="m6.05 14.8 6.05-10.25c.28-.48.98-.48 1.26 0l2.55 4.32" {...common} />
        <path d="M4.2 11.62h11.6" {...common} />
        <path d="m8.05 5.62 5.85 9.92" {...common} />
        <path d="M4.2 14.8h8.8" {...common} />
      </>
    ),
    desktop: (
      <>
        <rect x="2.55" y="3.35" width="14.9" height="10.45" rx="1.35" {...common} />
        <path d="M7.35 17.05h5.3M10 13.8v3.25" {...common} />
      </>
    ),
    documents: (
      <>
        <path d="M5.1 2.8h6.45l3.35 3.35v10.2c0 .83-.52 1.3-1.35 1.3H5.1c-.83 0-1.3-.47-1.3-1.3V4.1c0-.83.47-1.3 1.3-1.3Z" {...common} />
        <path d="M11.5 2.95V6.3h3.3M6.75 10.05h6.5M6.75 13h5.15" {...common} />
      </>
    ),
    downloads: (
      <>
        <circle cx="10" cy="10" r="6.75" {...common} />
        <path d="M10 5.4v6.3M7.6 9.55 10 11.95l2.4-2.4M6.7 14.45h6.6" {...common} />
      </>
    ),
  }

  return (
    <svg
      className={styles.sidebarIcon}
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}

type ToolbarIconName = 'back' | 'forward' | 'grid' | 'list' | 'chevron' | 'share' | 'tag' | 'more' | 'search'

function ToolbarIcon({ name }: { name: ToolbarIconName }) {
  const props = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const icons = {
    back: <path d="m12.5 4-5 6 5 6" {...props} />,
    forward: <path d="m7.5 4 5 6-5 6" {...props} />,
    grid: <><rect x="3" y="3" width="5" height="5" rx=".8" {...props} /><rect x="12" y="3" width="5" height="5" rx=".8" {...props} /><rect x="3" y="12" width="5" height="5" rx=".8" {...props} /><rect x="12" y="12" width="5" height="5" rx=".8" {...props} /></>,
    list: <><path d="M8 5h9M8 10h9M8 15h9" {...props} /><rect x="3" y="4" width="2" height="2" rx=".4" {...props} /><rect x="3" y="9" width="2" height="2" rx=".4" {...props} /><rect x="3" y="14" width="2" height="2" rx=".4" {...props} /></>,
    chevron: <path d="m6 8 4 4 4-4" {...props} />,
    share: <><path d="M10 13V3" {...props} /><path d="m6.5 6.5 3.5-3.5 3.5 3.5M5 9.5v6.25c0 .7.55 1.25 1.25 1.25h7.5c.7 0 1.25-.55 1.25-1.25V9.5" {...props} /></>,
    tag: <><path d="M3 9.2V4.5c0-.83.67-1.5 1.5-1.5h4.7L17 10.8a1.7 1.7 0 0 1 0 2.4l-3.8 3.8a1.7 1.7 0 0 1-2.4 0L3 9.2Z" {...props} /><circle cx="6.3" cy="6.3" r=".9" fill="currentColor" stroke="none" /></>,
    more: <><circle cx="4.5" cy="10" r="1" fill="currentColor" /><circle cx="10" cy="10" r="1" fill="currentColor" /><circle cx="15.5" cy="10" r="1" fill="currentColor" /></>,
    search: <><circle cx="8.5" cy="8.5" r="4.8" {...props} /><path d="m12 12 4 4" {...props} /></>,
  }

  return <svg className={styles.toolbarIcon} viewBox="0 0 20 20" aria-hidden="true">{icons[name]}</svg>
}

export default function Intro() {
  const [isMinimized, setIsMinimized] = useState(false)

  return (
    <section className={styles.intro}>

      {/* =========================
          WINDOW + FOLDERS
      ========================= */}

      <div className={styles.windowWrapper}>

        {!isMinimized ? (
          <>

            {/* MACOS WINDOW */}

            <div className={styles.window}>

              {/* TOP BAR */}

              <div className={styles.windowBar}>

                <div className={styles.windowControls}>

                  <button
                    type="button"
                    className={`${styles.control} ${styles.close}`}
                    onClick={() => setIsMinimized(true)}
                    aria-label="Close"
                  >
                    <span>×</span>
                  </button>

                  <button
                    type="button"
                    className={`${styles.control} ${styles.minimize}`}
                    onClick={() => setIsMinimized(true)}
                    aria-label="Minimize"
                  >
                    <span>−</span>
                  </button>

                  <button
                    type="button"
                    className={`${styles.control} ${styles.expand}`}
                    aria-label="Expand"
                  >
                    <span>+</span>
                  </button>

                </div>


                <div className={styles.windowLeftControls}>

                  <button
                    type="button"
                    className={styles.navigationButton}
                    aria-label="Back"
                  >
                    <ToolbarIcon name="back" />
                  </button>

                  <button
                    type="button"
                    className={styles.navigationButton}
                    aria-label="Forward"
                  >
                    <ToolbarIcon name="forward" />
                  </button>

                </div>


                <span className={styles.windowTitle}>
                  <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        @tookbydasha
      </a>
                </span>


                <div className={styles.windowActions}>
                  <div className={styles.toolbarGroup}>
                    <button type="button" className={styles.actionButton} aria-label="Icon view"><ToolbarIcon name="grid" /></button>
                    <button type="button" className={styles.chevronButton} aria-label="View options"><ToolbarIcon name="chevron" /></button>
                  </div>
                  <div className={styles.toolbarGroup}>
                    <button type="button" className={styles.actionButton} aria-label="List view"><ToolbarIcon name="list" /></button>
                    <button type="button" className={styles.chevronButton} aria-label="Sort options"><ToolbarIcon name="chevron" /></button>
                  </div>
                  <div className={styles.toolbarGroup}>
                    <button type="button" className={styles.actionButton} aria-label="Share"><ToolbarIcon name="share" /></button>
                    <button type="button" className={styles.actionButton} aria-label="Tags"><ToolbarIcon name="tag" /></button>
                    <button type="button" className={styles.actionButton} aria-label="More actions"><ToolbarIcon name="more" /></button>
                  </div>
                  <button type="button" className={styles.searchButton} aria-label="Search"><ToolbarIcon name="search" /></button>
                </div>

              </div>


              {/* WINDOW BODY */}

              <div className={styles.windowBody}>

                {/* SIDEBAR */}

               <aside className={styles.sidebar}>
  <div className={styles.sidebarSection}>
    <div className={`${styles.sidebarItem} ${styles.active}`}>
      <SidebarIcon name="recents" />
      <span>Recents</span>
    </div>

    <div className={styles.sidebarItem}>
      <SidebarIcon name="shared" />
      <span>Shared</span>
    </div>
  </div>

  <div className={styles.sidebarSection}>
    <span className={styles.sidebarHeading}>Favorites</span>

    <div className={styles.sidebarItem}>
      <SidebarIcon name="applications" />
      <span>Applications</span>
    </div>

    <div className={styles.sidebarItem}>
      <SidebarIcon name="desktop" />
      <span>Desktop</span>
    </div>

    <div className={styles.sidebarItem}>
      <SidebarIcon name="documents" />
      <span>Documents</span>
    </div>

    <div className={styles.sidebarItem}>
      <SidebarIcon name="downloads" />
      <span>Downloads</span>
    </div>
  </div>
</aside>


                {/* CONTENT */}

                <main className={styles.windowContent}>

                  <img
                    src="/images/intro/background.png"
                    alt=""
                    className={styles.contentImage}
                  />

                </main>

              </div>

            </div>


            {/* =========================
                FOLDERS
                IMPORTANT:
                OUTSIDE THE WINDOW
            ========================= */}

            <div className={styles.folderLayer}>

              {introFolders.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.folder} ${
                    styles[`folder${index + 1}`]
                  }`}
                >
                  <span className={styles.folderIcon}>
                    <Image
                      src="/images/intro/folder.png"
                      alt=""
                      fill
                      sizes="72px"
                      className={styles.folderImage}
                    />
                  </span>

                  <span className={styles.folderLabel}>
                    {link.label}
                  </span>

                </Link>
              ))}

            </div>

          </>
        ) : (

          /* =========================
             MINIMIZED CONTACT STATE
          ========================= */

          <button
            type="button"
            className={styles.contactWindow}
            onClick={() => setIsMinimized(false)}
          >
            <span className={styles.contactText}>
              i’d love to work together
            </span>

            <span className={styles.contactLink}>
              {EMAIL}
            </span>
          </button>

        )}

      </div>


      {/* =========================
          INTRO TEXT
      ========================= */}

      <div className={styles.introBottom}>

        <p className={styles.introText}>
          {site.intro.map((paragraph, index) => (
            <span key={paragraph}>
              {paragraph}

              {index < site.intro.length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </span>
          ))}
        </p>


        {/* ARROW */}

        <svg
          className={styles.arrow}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M8 10C45 6 85 20 91 48C96 71 80 88 58 94"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          <path
            d="M58 94L66 85"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          <path
            d="M58 94L70 96"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

      </div>

    </section>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Intro.module.scss'
import { introFolders, site } from '../data/site'

const INSTAGRAM_URL = 'https://www.instagram.com/tookbydasha/'
const EMAIL = 'tookbydasha@gmail.com'

/* =========================================================
   TOOLBAR ICONS
========================================================= */

const ArrowLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
)

const ArrowRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const Grid2X2 = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="8" height="8" />
    <rect x="13" y="3" width="8" height="8" />
    <rect x="3" y="13" width="8" height="8" />
    <rect x="13" y="13" width="8" height="8" />
  </svg>
)

const List = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
)

const ChevronDown = ({
  className,
}: {
  className?: string
}) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const Share = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
)

const Tag = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
)

const MoreHorizontal = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
)

const Search = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

/* =========================================================
   SIDEBAR ICONS
========================================================= */

const Clock3 = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const Folder = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
)

const AppWindow = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect
      x="2"
      y="3"
      width="20"
      height="14"
      rx="2"
      ry="2"
    />
    <line x1="2" y1="6" x2="22" y2="6" />
    <line x1="6" y1="3" x2="6" y2="17" />
  </svg>
)

const Monitor = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect
      x="2"
      y="3"
      width="20"
      height="14"
      rx="2"
      ry="2"
    />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)

const FileText = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="13" x2="8" y2="13" />
    <line x1="12" y1="17" x2="8" y2="17" />
    <polyline points="9 9 8 9 8 8" />
  </svg>
)

const Download = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

/* =========================================================
   SIDEBAR ITEM
========================================================= */

type SidebarItemProps = {
  icon: React.ReactNode
  label: string
  active?: boolean
  onClick: () => void
}

function SidebarItem({
  icon,
  label,
  active = false,
  onClick,
}: SidebarItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.sidebarItem} ${
        active ? styles.active : ''
      }`}
    >
      <span className={styles.sidebarIcon}>
        {icon}
      </span>

      <span className={styles.sidebarLabel}>
        {label}
      </span>
    </button>
  )
}

/* =========================================================
   FINDER WINDOW
========================================================= */

export default function FinderWindow() {
  const [isMinimized, setIsMinimized] = useState(false)

  const openContact = () => {
    setIsMinimized(true)
  }

  const closeContact = () => {
    setIsMinimized(false)
  }

  return (
    <section className={styles.intro}>

      {/* ===================================================
          WINDOW + FOLDERS
      =================================================== */}

      <div className={styles.windowWrapper}>

        {/* =================================================
            FINDER WINDOW
        ================================================= */}

        <div className={styles.window}>

          {/* ===============================================
              TRAFFIC LIGHTS
          =============================================== */}

          <div className={styles.trafficLights}>

  <button
    type="button"
    className={`${styles.trafficLight} ${styles.close}`}
    onClick={openContact}
    aria-label="Close"
  >
    <span>×</span>
  </button>

  <button
    type="button"
    className={`${styles.trafficLight} ${styles.minimize}`}
    onClick={openContact}
    aria-label="Minimize"
  >
    <span>−</span>
  </button>

  <button
    type="button"
    className={`${styles.trafficLight} ${styles.maximize}`}
    onClick={openContact}
    aria-label="Maximize"
  >
    <span>+</span>
  </button>

</div>

          {/* ===============================================
              SIDEBAR
          =============================================== */}

          <aside className={styles.sidebar}>

            <div className={styles.sidebarTop}>

              <SidebarItem
                icon={<Clock3 />}
                label="Recents"
                active
                onClick={openContact}
              />

              <SidebarItem
                icon={<Folder />}
                label="Shared"
                onClick={openContact}
              />

            </div>


            <div className={styles.section}>

              <div className={styles.sectionTitle}>
                Favorites
              </div>

              <SidebarItem
                icon={<AppWindow />}
                label="Applications"
                onClick={openContact}
              />

              <SidebarItem
                icon={<Monitor />}
                label="Desktop"
                onClick={openContact}
              />

              <SidebarItem
                icon={<FileText />}
                label="Documents"
                onClick={openContact}
              />

              <SidebarItem
                icon={<Download />}
                label="Downloads"
                onClick={openContact}
              />

            </div>

          </aside>


          {/* ===============================================
              MAIN
          =============================================== */}

          <main className={styles.main}>

            {/* =============================================
                TOOLBAR
            ============================================= */}

            <header className={styles.toolbar}>

              {/* BACK / FORWARD */}

              <div className={styles.navigation}>

                <button
                  type="button"
                  className={styles.navButton}
                  onClick={openContact}
                  aria-label="Back"
                >
                  <ArrowLeft />
                </button>

                <span className={styles.navDivider} />

                <button
                  type="button"
                  className={`${styles.navButton} ${styles.disabled}`}
                  onClick={openContact}
                  aria-label="Forward"
                >
                  <ArrowRight />
                </button>

              </div>


              {/* TITLE */}

              <div className={styles.title}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @tookbydasha
                </a>
              </div>


              {/* ACTIONS */}

              <div className={styles.actions}>

                {/* GRID */}

                <button
                  type="button"
                  className={styles.actionButton}
                  onClick={openContact}
                  aria-label="Grid view"
                >
                  <Grid2X2 />

                  <ChevronDown
                    className={styles.tinyChevron}
                  />
                </button>


                {/* LIST */}

                <button
                  type="button"
                  className={styles.actionButton}
                  onClick={openContact}
                  aria-label="List view"
                >
                  <List />

                  <ChevronDown
                    className={styles.tinyChevron}
                  />
                </button>


                {/* SHARE */}

                <button
                  type="button"
                  className={styles.iconButton}
                  onClick={openContact}
                  aria-label="Share"
                >
                  <Share />
                </button>


                {/* TAG */}

                <button
                  type="button"
                  className={styles.iconButton}
                  onClick={openContact}
                  aria-label="Tags"
                >
                  <Tag />
                </button>


                {/* MORE */}

                <button
                  type="button"
                  className={styles.iconButton}
                  onClick={openContact}
                  aria-label="More"
                >
                  <MoreHorizontal />
                </button>


                {/* SEARCH */}

                <button
                  type="button"
                  className={styles.searchButton}
                  onClick={openContact}
                  aria-label="Search"
                >
                  <Search />
                </button>

              </div>

            </header>


            {/* =============================================
                CONTENT
            ============================================= */}

            <div className={styles.content}>

              {isMinimized ? (

                <div className={styles.contactContent}>

                  <p className={styles.contactText}>
                    hey, let’s create something beautiful together
                  </p>

                  <a
                    href={`mailto:${EMAIL}`}
                    className={styles.contactLink}
                  >
                    {EMAIL}
                  </a>

                  <button
                    type="button"
                    className={styles.contactClose}
                    onClick={closeContact}
                    aria-label="Close"
                  >
                    ×
                  </button>

                </div>

              ) : (

                <img
                  src="/images/intro/background.png"
                  alt=""
                  className={styles.contentImage}
                />

              )}

            </div>

          </main>

        </div>


        {/* =================================================
            FOLDERS
        ================================================= */}

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
                  sizes="105px"
                  className={styles.folderImage}
                />

              </span>

              <span className={styles.folderLabel}>
                {link.label}
              </span>

            </Link>
          ))}

        </div>

      </div>


      {/* =================================================
          INTRO TEXT
      ================================================= */}
 <div className={styles.mobileIntro}>
  i'm dasha — <span className={styles.highlight}>
    a content creator from denmark.
  </span>
</div>

<div className={styles.mobileImage}>
  <Image
    src="/images/intro/intro-mobile.png"
    alt=""
    width={1200}
    height={800}
  />
</div>

      <div className={styles.introBottom}>
       
        <p className={styles.introText}>

  i'm dasha — <span className={styles.highlight}>
    a content creator from denmark.
  </span>

  <br />
  <br />

  i'm creating cozy lifestyle content inspired by home, coffee,
  copenhagen's streets and everyday moments

  <br />
  <br />

  explore my latest collaborations below, and{' '}
  <span className={styles.highlight}>
    let's work together!
  </span>

</p>

        {/* ===============================================
            ARROW
        =============================================== */}

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
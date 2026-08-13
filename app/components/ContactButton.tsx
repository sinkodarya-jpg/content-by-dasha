'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './ContactButton.module.scss'

const EMAIL = 'tookbydasha@gmail.com'
const CONTACTS_URL = '/info?tab=contacts'

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    // На мобильном первый клик только раскрывает кнопку
    if (window.innerWidth <= 768 && !isOpen) {
      setIsOpen(true)
      return
    }

    // Второй клик на мобильном
    // или любой клик на desktop
    router.push(CONTACTS_URL)
  }

  return (
    <button
      type="button"
      className={`${styles.contactButton} ${
        isOpen ? styles.open : ''
      }`}
      onClick={handleClick}
      aria-label={
        isOpen
          ? `Contact me at ${EMAIL}`
          : 'Contact me'
      }
    >
      <span className={styles.icon}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />

          <path
            d="M4 7L12 13L20 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className={styles.email}>
        {EMAIL}
      </span>
    </button>
  )
}
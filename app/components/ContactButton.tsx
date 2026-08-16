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
    // На мобильном первый клик только раскрывает email
    if (window.innerWidth <= 768 && !isOpen) {
      setIsOpen(true)
      return
    }

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
      <img
        src="/images/phone.png"
        alt=""
        className={styles.phone}
        aria-hidden="true"
      />

      <span className={styles.email}>
        {EMAIL}
      </span>
    </button>
  )
}
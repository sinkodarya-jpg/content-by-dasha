'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './ContactButton.module.scss'

const EMAIL = 'tookbydasha@gmail.com'
const CONTACTS_URL = '/info?tab=contacts'

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handlePhoneClick = () => {
    // Desktop — клик сразу ведёт на Contacts
    if (window.innerWidth > 768) {
      router.push(CONTACTS_URL)
      return
    }

    // Mobile — телефон только открывает / закрывает email
    setIsOpen(prev => !prev)
  }

  const handleEmailClick = () => {
    router.push(CONTACTS_URL)
  }

  return (
    <div
      className={`${styles.contactButton} ${
        isOpen ? styles.open : ''
      }`}
    >
      <button
        type="button"
        className={styles.phoneButton}
        onClick={handlePhoneClick}
        aria-label="Contact me"
      >
        <img
          src="/images/phone.png"
          alt=""
          className={styles.phone}
          aria-hidden="true"
        />
      </button>

      <button
        type="button"
        className={styles.email}
        onClick={handleEmailClick}
      >
        {EMAIL}
      </button>
    </div>
  )
}
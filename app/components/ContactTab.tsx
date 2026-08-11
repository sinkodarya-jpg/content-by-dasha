"use client";

import Image from "next/image";
import { useState } from "react";
import styles from './ContactTab.module.scss';
import { site } from '../data/site';

export default function ContactsTab() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <section className={styles.contact}>

      {/* Background + Content */}
      <div className={styles.contactGrid}>

        {/* Background */}
        <Image
          src={site.contact.backgroundImage}
          alt=""
          width={1920}
          height={1080}
          className={styles.contactBackground}
        />

        {/* Content */}
        <div className={styles.contactContent}>

          {/* Email */}
          <div className={styles.emailWrap}>

            {/* Copied */}
            <span
              className={`${styles.copied} ${copied ? styles.copiedVisible : ""}`}
            >
              {site.contact.copiedMessage}
            </span>

            <button
              onClick={copyEmail}
              className={styles.emailButton}
            >

              {/* Highlight */}
              <span
                className={styles.emailHighlight}
              />

              {/* Left marker */}
              <span
                className={`${styles.emailMarker} ${styles.emailMarkerLeft}`}
              >
              </span>

              {/* Right marker */}
              <span
                className={`${styles.emailMarker} ${styles.emailMarkerRight}`}
              >
              </span>

              <span className={styles.emailText}>
                {site.email}
              </span>

            </button>

          </div>

          {/* Description */}
          <div className={styles.contactDescription}>

            {site.contact.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            <p className={styles.signoff}>
              {site.contact.signoff}
            </p>

          </div>

        </div>

      </div>

      {/* Bottom spacing */}
      <div className={styles.contactSpacer} />

    </section>
  );
}

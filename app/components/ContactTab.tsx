"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ContactTab.module.scss";

const EMAIL = "tookbydasha@gmail.com";

export default function ContactsTab() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      // Clipboard is not available
    }
  };

  return (
    <section className={styles.contact}>
      {/* ==================================================
          DESKTOP
      ================================================== */}

      <div className={styles.desktopLayout}>
        <div className={styles.desktopContent}>
          <div className={styles.desktopHeading}>
            <h1 className={styles.desktopTitle}>
              Say hello
            </h1>

            <EmailButton
              copied={copied}
              onClick={copyEmail}
              variant="desktop"
            />
          </div>

          <div className={styles.desktopDescription}>
            <p>
              have an idea for a collaboration, a gift you&apos;d love to send,
              or a bigger project in mind?
            </p>

            <p>
              i&apos;d love to hear about it — reach out for anything and
              everything.
            </p>

            <p className={styles.desktopSignoff}>
              xx dasha
            </p>
          </div>

          <Image
            src="/images/contacts/contact-circles.png"
            alt=""
            width={300}
            height={60}
            className={styles.desktopCircles}
          />
        </div>

        <Image
          src="/images/contacts/contact-photo-desktop.png"
          alt=""
          width={1920}
          height={1080}
          className={styles.desktopPhoto}
        />
      </div>


      {/* ==================================================
          MOBILE
      ================================================== */}

      <div className={styles.mobileLayout}>
        <div className={styles.mobileContent}>
          <h1 className={styles.mobileTitle}>
            Say hello
          </h1>

          <EmailButton
            copied={copied}
            onClick={copyEmail}
            variant="mobile"
          />

          <div className={styles.mobileDescription}>
            <p>
              have an idea for a collaboration, a gift
              you&apos;d love to send, or a bigger project in
              mind?
            </p>

            <p>
              i&apos;d love to hear about it — reach out for
              anything and everything.
            </p>

            <p className={styles.mobileSignoff}>
              xx dasha
            </p>
          </div>

          <Image
            src="/images/contacts/contact-circles.png"
            alt=""
            width={300}
            height={60}
            className={styles.mobileCircles}
          />
        </div>

        <Image
          src="/images/contacts/contact-photo-mobile.png"
          alt=""
          width={700}
          height={1000}
          className={styles.mobilePhoto}
        />
      </div>
    </section>
  );
}


/* ======================================================
   EMAIL BUTTON
====================================================== */

function EmailButton({
  copied,
  onClick,
  variant,
}: {
  copied: boolean;
  onClick: () => void;
  variant: "desktop" | "mobile";
}) {
  return (
    <div
      className={`${styles.emailWrap} ${
        variant === "mobile"
          ? styles.mobileEmailWrap
          : styles.desktopEmailWrap
      }`}
    >
      <span
        className={`${styles.copied} ${
          copied ? styles.copiedVisible : ""
        }`}
      >
        Copied to clipboard
      </span>

      <button
        type="button"
        className={styles.emailButton}
        onClick={onClick}
        aria-label={`Copy ${EMAIL}`}
      >
        <span className={styles.emailHighlight} />

        <span
          className={`${styles.emailMarker} ${styles.emailMarkerLeft}`}
        />

        <span
          className={`${styles.emailMarker} ${styles.emailMarkerRight}`}
        />

        <span className={styles.emailText}>
          [{EMAIL}]
        </span>
      </button>
    </div>
  );
}
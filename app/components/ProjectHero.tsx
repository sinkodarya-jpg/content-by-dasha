"use client";

import { useRouter } from "next/navigation";
import styles from './ProjectHero.module.scss';

type Props = {
  title: string;
  subtitle: string;
};

export default function ProjectHero({
  title,
  subtitle,
}: Props) {
  const router = useRouter();

  return (
    <section className={styles.projectHero}>
      <button
        onClick={() => router.push("/")}
        className={styles.backLink}
      >
        <span className={styles.backArrow}>
          ←
        </span>

        <span>back to projects</span>
      </button>

      <div className={styles.projectTitleWrap}>
        <h1 className={styles.projectTitle}>
          {title}
        </h1>

        <p className={styles.projectSubtitle}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}

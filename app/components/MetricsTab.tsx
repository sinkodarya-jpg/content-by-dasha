"use client";
import Image from "next/image";
import styles from './MetricsTab.module.scss';

type Props = {
  followers: string;
  engagementRate: string;
  audience: string[];
  postReach: string[];
};

export default function MetricsTab({
  followers,
  engagementRate,
  audience,
  postReach,
}: Props) {
  return (
    <section className={styles.metrics}>

      {/* Intro */}
      <p className={styles.metricsIntro}>
        Below you can find statistics from my profile for the latest
        period. The information is updated on the first day of every
        month.
      </p>

      {/* Main Numbers */}
      <div className={styles.metricsNumbers}>
        <p className={styles.metricsNumber}>
          {followers} followers
        </p>

        <p className={styles.metricsNumber}>
          engagement rate — {engagementRate}
        </p>
      </div>

      {/* Audience */}
      <section className={styles.metricGroup}>
        <p className={styles.metricLabel}>
          audience
        </p>

        <div className={styles.metricImages}>
          {audience.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`Audience statistics ${index + 1}`}
              width={1080}
              height={1080}
            />
          ))}
        </div>
      </section>

      {/* Post Reach */}
      <section className={styles.metricGroup}>
        <p className={styles.metricLabel}>
          post reach
        </p>

        <div className={styles.metricImages}>
          {postReach.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`Post reach statistics ${index + 1}`}
              width={1080}
              height={1080}
            />
          ))}
        </div>
      </section>


    </section>
  );
}

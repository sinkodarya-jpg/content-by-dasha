"use client";

import Image from "next/image";
import styles from './GalleryItem.module.scss';

type Props = {
  type: "image" | "video";
  src: string;
  poster?: string;
  orientation: "vertical" | "horizontal";
};

export default function GalleryItem({
  type,
  src,
  poster,
  orientation,
}: Props) {
  const size = orientation === "vertical" ? styles.galleryVertical : styles.galleryHorizontal;

  return (
    <article
      className={`${styles.galleryItem} ${size}`}
    >
      {type === "image" ? (
        <Image
          src={src}
          alt=""
          width={1600}
          height={1600}
          draggable={false}
          className={styles.galleryMedia}
        />
      ) : (
        <video
          controls
          playsInline
          preload="metadata"
          poster={poster}
          className={styles.galleryMedia}
        >
          <source src={src} />
        </video>
      )}
    </article>
  );
}

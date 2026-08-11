"use client";

import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import GalleryItem from "./GalleryItem";
import type { GalleryItem as GalleryItemType } from "../data/projects";
import styles from './ProjectGallery.module.scss';

import "swiper/css";

type Props = {
  items: GalleryItemType[];
};

export default function ProjectGallery({ items }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={styles.gallery}>
      {/* Header */}

      <div className={styles.galleryControls}>

        <div className={styles.galleryControlGroup}>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`${styles.galleryButton} ${styles.galleryPrev}`}
          >
            ←
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`${styles.galleryButton} ${styles.galleryNext}`}
          >
            →
          </button>

        </div>

      </div>

      <Swiper
        modules={[Mousewheel]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop
        speed={700}
        slidesPerView="auto"
        spaceBetween={16}
        grabCursor
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className={styles.gallerySlide}
          >
            <GalleryItem
              type={item.type}
              src={item.src}
              poster={item.poster}
              orientation={item.orientation}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

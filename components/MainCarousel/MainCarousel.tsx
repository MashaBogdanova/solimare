'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  CarouselImage,
  carouselImages,
  carouselImagesPortrait,
} from '../../configs/carousel.config';
import styles from './main-carousel.module.scss';

function MainCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<CarouselImage[] | null>(null);
  const [imagesLength, setImagesLength] = useState<number>(0);

  useEffect(() => {
    if (window.innerWidth <= 450) {
      setImages(carouselImagesPortrait);
      setImagesLength(carouselImagesPortrait.length);
    } else {
      setImages(carouselImages);
      setImagesLength(carouselImages.length);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagesLength);
    }, 3000);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className={styles.carousel}>
      {images &&
        images.map((image, index) => (
          <Image
            key={image.name}
            src={image.file}
            className={`${styles.carousel__image} ${
              index === currentIndex ? styles.carousel__image_visible : ''
            }`}
            alt={image.name}
            quality={100}
            fill
            sizes="100vw"
            placeholder="blur"
            priority
          />
        ))}
    </div>
  );
}

export default MainCarousel;

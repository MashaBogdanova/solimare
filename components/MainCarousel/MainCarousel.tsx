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

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imagesLength - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carousel}>
      {images &&
        images.map((image, index) => (
          <Image
            key={image.name}
            src={image.file}
            className={styles.carousel__image}
            style={{ opacity: index === currentIndex ? 1 : 0 }}
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

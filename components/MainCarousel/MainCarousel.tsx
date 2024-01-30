'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import carouselImages from '../../configs/carousel.config';
import styles from './main-carousel.module.scss';

function MainCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carousel}>
      {carouselImages.map((image, index) => (
        <Image
          key={image.name}
          src={image.file}
          className={styles.carousel__image}
          style={{ opacity: index === currentIndex ? 1 : 0 }}
          alt={image.name}
          fill
          sizes="100vw"
          placeholder="blur"
        />
      ))}
    </div>
  );
}

export default MainCarousel;

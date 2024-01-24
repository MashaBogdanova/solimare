'use client';

import React, { useState, useEffect } from 'react';
import styles from './_mainCarousel.module.scss';
import carouselImages from '../../configs/carousel.config';

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
        <div
          key={image}
          className={styles.carousel__image}
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}

export default MainCarousel;

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'antd';
import carouselImages from '../../configs/carousel.config';
import styles from './_mainCarousel.module.scss';

function MainCarousel() {
  return (
    <Carousel autoplay dots={false} effect="fade" className={styles.carousel}>
      {carouselImages.map((image) => (
        <Image
          src={image}
          className={styles.carousel__image}
          key={image.src}
          alt="Grota solna"
        />
      ))}
    </Carousel>
  );
}

export default MainCarousel;

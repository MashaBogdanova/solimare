import React from 'react';
import Image from 'next/image';
import { Carousel } from 'antd';
import carouselImage1 from '../../public/carousel/20220227_210757.jpg';
import carouselImage2 from '../../public/carousel/20220225_130638.jpg';
import carouselImage3 from '../../public/carousel/20220227_210839.jpg';
import carouselImage4 from '../../public/carousel/20220225_121155.jpg';
import carouselImage5 from '../../public/carousel/IMG_3724.jpg';
import carouselImage6 from '../../public/carousel/IMG_3742.JPG';
import styles from './_mainCarousel.module.scss';

function MainCarousel() {
  const images = [
    carouselImage1,
    carouselImage5,
    carouselImage2,
    carouselImage6,
    carouselImage3,
    carouselImage4,
  ];
  return (
    <Carousel autoplay dots={false} effect="fade" className={styles.carousel}>
      {images.map((image) => (
        <Image
          src={image}
          className={styles.carousel__image}
          key={image}
          alt="Grota solna"
        />
      ))}
    </Carousel>
  );
}

export default MainCarousel;

import React from "react";
import Image from 'next/image';
import {Carousel} from "antd";
import carouselImage1 from "@/assets/20220227_210757.jpg";
import carouselImage2 from "@/assets/20220225_130638.jpg";
import carouselImage3 from "@/assets/20220227_210839.jpg";
import carouselImage4 from "@/assets/20220225_121155.jpg";
import styles from "@/app/page.module.css";


function MainCarousel() {
    return <Carousel autoplay dots={false} effect="fade" className={styles.carousel}>
        <Image src={carouselImage1} className={styles.carouselImage}/>
        <Image src={carouselImage2} className={styles.carouselImage}/>
        <Image src={carouselImage3} className={styles.carouselImage}/>
        <Image src={carouselImage4} className={styles.carouselImage}/>
    </Carousel>;
}

export default MainCarousel;

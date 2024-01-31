import { StaticImageData } from 'next/image';
import image1 from '../public/carousel/1.jpg';
import image2 from '../public/carousel/2.jpg';
import image3 from '../public/carousel/3.jpg';
import image4 from '../public/carousel/4.jpg';
import image5 from '../public/carousel/5.jpg';
import imagePortrait1 from '../public/carousel/portrait/1.jpg';
import imagePortrait2 from '../public/carousel/portrait/2.jpg';
import imagePortrait3 from '../public/carousel/portrait/3.jpg';
import imagePortrait4 from '../public/info-section/sauna.jpg';
import imagePortrait5 from '../public/info-section/inhalation.jpg';

export interface CarouselImage {
  name: string;
  file: StaticImageData;
}

export const carouselImages: CarouselImage[] = [
  { name: 'grota', file: image1 },
  { name: 'lampa solna', file: image2 },
  { name: 'osadzanie soli', file: image3 },
  { name: 'krzesła w grocie', file: image4 },
  { name: 'grota solna', file: image5 },
];

export const carouselImagesPortrait: CarouselImage[] = [
  { name: 'lampa solna', file: imagePortrait1 },
  { name: 'osadzanie soli', file: imagePortrait2 },
  { name: 'krzesła w grocie', file: imagePortrait3 },
  { name: 'sauna infrared', file: imagePortrait4 },
  { name: 'ściana solna', file: imagePortrait5 },
];

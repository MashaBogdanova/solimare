import React from 'react';
import MainCarousel from '../components/main-carousel/MainCarousel';
import pagesInfo from '../configs/pages.config';
import InfoSection from '../components/layout/info-section/InfoSection';
import Price from '../components/Price/Price';
import Contacts from '../components/Contacts/Contacts';

export default function Home() {
  return (
    <main>
      <MainCarousel />
      <InfoSection sectionInfo={pagesInfo.saltCave} />
      <InfoSection sectionInfo={pagesInfo.saunaInfrared} isLight />
      <InfoSection sectionInfo={pagesInfo.inhalation} />
      <InfoSection sectionInfo={pagesInfo.yoga} isLight />
      <Contacts />
      <Price />
    </main>
  );
}

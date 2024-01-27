import React from 'react';
import pagesInfo from '../configs/sections.config';
import MainCarousel from '../components/Main-carousel/MainCarousel';
import InfoSection from '../components/layout/Info-section/InfoSection';
import Price from '../components/Price/Price';
import Contacts from '../components/Contacts/Contacts';
import SaltCaveBenefits from '../components/SaltCaveBenefits/SaltCaveBenefits';

export default function Home() {
  return (
    <main>
      <MainCarousel />
      <InfoSection sectionInfo={pagesInfo.saltCave} isDark />
      <SaltCaveBenefits />
      <InfoSection sectionInfo={pagesInfo.saunaInfrared} />
      <InfoSection sectionInfo={pagesInfo.inhalation} isDark />
      <InfoSection sectionInfo={pagesInfo.yoga} />
      <Price />
      <Contacts />
    </main>
  );
}

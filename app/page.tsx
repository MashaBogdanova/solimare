import React from 'react';
import sectionsConfig from '../configs/sections.config';
import MainCarousel from '../components/MainCarousel/MainCarousel';
import InfoSection from '../components/layout/InfoSection/InfoSection';
import Price from '../components/Price/Price';
import Contacts from '../components/Contacts/Contacts';
import SaltCaveBenefits from '../components/SaltCaveBenefits/SaltCaveBenefits';

export default function Home() {
  return (
    <main>
      <MainCarousel />
      <InfoSection sectionInfo={sectionsConfig.saltCave} isDark />
      <SaltCaveBenefits />
      <InfoSection sectionInfo={sectionsConfig.saunaInfrared} />
      <InfoSection sectionInfo={sectionsConfig.inhalation} isDark />
      <InfoSection sectionInfo={sectionsConfig.yoga} />
      <Price />
      <Contacts />
    </main>
  );
}

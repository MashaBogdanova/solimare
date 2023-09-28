import React from 'react';
import styles from './_page.module.scss';
import Header from './components/header/Header';
import MainCarousel from './components/mainCaousel/MainCarousel';
import SaltCave from './components/saltCave/SaltCave';
import Inhalation from './components/inhalation/Inhalation';
import Sauna from './components/sauna/Sauna';
import Yoga from './components/yoga/Yoga';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <MainCarousel />
        <SaltCave />
        <Sauna />
        <Inhalation />
        <Yoga />
      </main>
      <Footer />
    </>
  );
}

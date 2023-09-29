import React from 'react';
import { ConfigProvider } from 'antd';
import antdStyles from './appStyles';
import styles from './_page.module.scss';
import Header from './components/header/Header';
import MainCarousel from './components/mainCaousel/MainCarousel';
import SaltCave from './salt-cave/page';
import Inhalation from './inhalation/page';
import Sauna from './sauna/page';
import Yoga from './yoga/page';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <ConfigProvider theme={antdStyles}>
      <Header />
      <main className={styles.main}>
        <MainCarousel />
        <SaltCave />
        <Sauna />
        <Inhalation />
        <Yoga />
      </main>
      <Footer />
    </ConfigProvider>
  );
}

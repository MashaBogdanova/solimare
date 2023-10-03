import React from 'react';
import styles from './_page.module.scss';
import MainCarousel from '../components/mainCarousel/MainCarousel';

export default function Home() {
  return (
    <main className={styles.main}>
      <MainCarousel />
    </main>
  );
}

import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import PageLayout from '../../components/layout/layout-width/PageLayout';
import photo from '../../assets/yoga.jpg';
import styles from './_yoga.module.scss';
import pagesInfo from '../../configs/pages.config';

export const metadata: Metadata = {
  title: 'Grota Solna',
  description: 'Yoga w Grocie Solney Warszawa',
};

function Yoga() {
  return (
    <PageLayout>
      <section className={styles.yoga}>
        <div className={styles.yoga__text}>
          <h1 className={styles.yoga__title}>{pagesInfo.yoga.title}</h1>
          {pagesInfo.yoga.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Image
          src={photo}
          className={styles.yoga__picture}
          alt="girl doing yoga"
        />
      </section>
    </PageLayout>
  );
}

export default Yoga;

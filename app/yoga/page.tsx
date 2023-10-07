import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import PageLayout from '../../components/layout/page-layout/PageLayout';
import photo from '../../assets/pages/yoga.jpg';
import styles from './_yoga.module.scss';
import pagesInfo from '../../configs/pages.config';

export const metadata: Metadata = {
  title: 'Yoga',
  description: 'Yoga w Grocie Solney Warszawa',
};

function Yoga() {
  return (
    <PageLayout>
      <div>
        <h1>{pagesInfo.yoga.title}</h1>
        {pagesInfo.yoga.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <Image
        src={photo}
        className={styles.yoga__picture}
        alt="girl doing yoga"
      />
    </PageLayout>
  );
}

export default Yoga;

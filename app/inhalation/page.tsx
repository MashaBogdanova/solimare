import React from 'react';
import Image from 'next/image';
import photo from '../../assets/pages/inhalation.jpg';
import styles from './_inhalation.module.scss';
import PageLayout from '../../components/layout/layout-width/PageLayout';
import pagesInfo from '../../configs/pages.config';

function Inhalation() {
  return (
    <PageLayout>
      <section className={styles.inhalation}>
        <Image
          src={photo}
          className={styles.inhalation__picture}
          alt="inhalation"
        />
        <div className={styles.inhalation__text}>
          <h1 className={styles.inhalation__title}>
            {pagesInfo.inhalation.title}
          </h1>
          {pagesInfo.inhalation.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

export default Inhalation;

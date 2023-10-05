import React from 'react';
import Image from 'next/image';
import photo from '../../assets/grota-solna.jpg';
import styles from './_saltCave.module.scss';
import PageLayout from '../../components/layout/layout-width/PageLayout';
import pagesInfo from '../../configs/pages.config';

function SaltCave() {
  return (
    <PageLayout>
      <section className={styles.saltCave}>
        <Image
          src={photo}
          className={styles.saltCave__picture}
          alt="salt cave"
        />
        <div className={styles.saltCave__text}>
          <h1 className={styles.saltCave__title}>{pagesInfo.saltCave.title}</h1>
          {pagesInfo.saltCave.description.map((paragraph) => (
            <p className={styles.saltCave__paragraph} key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

export default SaltCave;

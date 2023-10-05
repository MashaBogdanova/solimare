import React from 'react';
import Image from 'next/image';
import PageLayout from '../../components/layout/layout-width/PageLayout';
import photo from '../../assets/pages/sauna.jpg';
import styles from './_sauna.module.scss';
import pagesInfo from '../../configs/pages.config';

function Sauna() {
  return (
    <PageLayout>
      <section className={styles.sauna}>
        <div className={styles.sauna__text}>
          <h1 className={styles.sauna__title}>
            {pagesInfo.saunaInfrared.title}
          </h1>
          {pagesInfo.saunaInfrared.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Image src={photo} className={styles.sauna__picture} alt="sauna" />
      </section>
    </PageLayout>
  );
}

export default Sauna;

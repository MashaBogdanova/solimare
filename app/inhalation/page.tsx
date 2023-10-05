import React from 'react';
import Image from 'next/image';
import photo from '../../assets/pages/inhalation.jpg';
import styles from './_inhalation.module.scss';
import PageLayout from '../../components/layout/page-layout/PageLayout';
import pagesInfo from '../../configs/pages.config';

function Inhalation() {
  return (
    <PageLayout>
      <Image
        src={photo}
        className={styles.inhalation__picture}
        alt="inhalation"
      />
      <div>
        <h1>{pagesInfo.inhalation.title}</h1>
        {pagesInfo.inhalation.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </PageLayout>
  );
}

export default Inhalation;

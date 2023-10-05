import React from 'react';
import Image from 'next/image';
import photo from '../../assets/pages/grota-solna.jpg';
import styles from './_salt-сave-about.module.scss';
import PageLayout from '../../components/layout/page-layout/PageLayout';
import pagesInfo from '../../configs/pages.config';

function SaltCave() {
  return (
    <PageLayout>
      <Image src={photo} className={styles.saltCave__picture} alt="salt cave" />
      <div>
        <h1>{pagesInfo.saltCave.title}</h1>
        {pagesInfo.saltCave.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </PageLayout>
  );
}

export default SaltCave;

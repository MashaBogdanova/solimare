import React from 'react';
import Image from 'next/image';
import PageLayout from '../../components/layout/page-layout/PageLayout';
import pagesInfo from '../../configs/pages.config';
import photo from '../../public/pages/sauna.jpg';
import styles from './_sauna.module.scss';

function Sauna() {
  return (
    <PageLayout>
      <div>
        <h1>{pagesInfo.saunaInfrared.title}</h1>
        {pagesInfo.saunaInfrared.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <Image src={photo} alt="sauna" className={styles.sauna__picture} />
    </PageLayout>
  );
}

export default Sauna;

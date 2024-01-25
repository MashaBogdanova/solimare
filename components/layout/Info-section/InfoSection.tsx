'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Section } from '../../../configs/sections.config';
import styles from './_info-section.module.scss';

interface IProps {
  sectionInfo: Section;
  isLight?: boolean;
}

function InfoSection({ sectionInfo, isLight = false }: IProps) {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section
      className={!isLight ? styles.section_light : styles.section}
      id={sectionInfo.hash}
    >
      {windowWidth > 800 && isLight && (
        <Image
          className={styles.section__picture}
          src={sectionInfo.picture.file}
          alt={sectionInfo.picture.alt}
        />
      )}

      <div className={styles.section__text}>
        <h2 className={!isLight ? styles.section__title_light : ''}>
          {sectionInfo.title}
        </h2>
        <h4>{sectionInfo.mainInfo.subtitle}</h4>
        {sectionInfo.mainInfo.text.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {sectionInfo.mainInfo.addition && (
          <i>{sectionInfo.mainInfo.addition}</i>
        )}
      </div>

      {(windowWidth <= 800 || !isLight) && (
        <Image
          className={styles.section__picture}
          src={sectionInfo.picture.file}
          alt={sectionInfo.picture.alt}
        />
      )}
    </section>
  );
}

export default InfoSection;

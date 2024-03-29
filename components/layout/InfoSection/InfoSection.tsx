import React from 'react';
import Image from 'next/image';
import { Section } from '../../../configs/sections.config';
import styles from './info-section.module.scss';

interface IProps {
  sectionInfo: Section;
  isDark?: boolean;
}

function InfoSection({ sectionInfo, isDark = false }: IProps) {
  return (
    <section
      className={`${styles.infoSection} ${
        isDark ? styles.infoSection_dark : ''
      }`}
      id={sectionInfo.hash}
    >
      <div
        className={`${styles.infoSection__content} ${
          isDark ? styles.infoSection__content_reversed : ''
        }`}
      >
        <Image
          src={sectionInfo.picture.file}
          className={styles.infoSection__picture}
          alt={sectionInfo.picture.alt}
          quality={100}
          placeholder="blur"
        />

        <div className={styles.infoSection__textBlock}>
          <h2
            className={`${styles.infoSection__title} ${
              isDark ? styles.infoSection__title_dark : ''
            }`}
          >
            {sectionInfo.title}
          </h2>
          <h4 className={styles.infoSection__subtitle}>
            {sectionInfo.mainInfo.subtitle}
          </h4>
          <p className={styles.infoSection__paragraph}>
            {sectionInfo.mainInfo.text}
          </p>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;

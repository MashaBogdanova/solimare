import React from 'react';
import Image from 'next/image';
import { Section } from '../../../configs/sections.config';
import styles from './_info-section.module.scss';

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
          className={styles.infoSection__picture}
          src={sectionInfo.picture.file}
          alt={sectionInfo.picture.alt}
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
          {sectionInfo.mainInfo.text.map((paragraph) => (
            <p className={styles.infoSection__paragraph} key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfoSection;

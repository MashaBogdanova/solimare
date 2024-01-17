import React from 'react';
import Image from 'next/image';
import SectionLayout from '../Section-layout/SectionLayout';
import { Section } from '../../../configs/pages.config';
import styles from './_info-section.module.scss';

interface IProps {
  sectionInfo: Section;
  isLight?: boolean;
}

function InfoSection({ sectionInfo, isLight = false }: IProps) {
  return (
    <section className={isLight ? '' : styles.section} id={sectionInfo.hash}>
      <SectionLayout>
        {isLight && (
          <Image
            className={styles.section__picture}
            src={sectionInfo.picture.file}
            alt={sectionInfo.picture.alt}
          />
        )}

        <div className={styles.section__text}>
          <h2 className={isLight ? '' : styles.section__title_light}>
            {sectionInfo.title}
          </h2>
          <h4>{sectionInfo.mainInfo.subtitle}</h4>
          {typeof sectionInfo.mainInfo.text === 'string' ? (
            <p>{sectionInfo.mainInfo.text}</p>
          ) : (
            sectionInfo.mainInfo.text.map((paragraph) => {
              return typeof paragraph === 'string' ? (
                <p key={paragraph}>{paragraph}</p>
              ) : (
                <li key={paragraph.subtitle}>
                  <h4 className={styles.infoSection__listSubtitle}>
                    {paragraph.subtitle && paragraph.subtitle}
                  </h4>
                  <p className={styles.infoSection__listText}>
                    {paragraph.text as string}
                  </p>
                </li>
              );
            })
          )}
          {sectionInfo.mainInfo.addition && (
            <i>{sectionInfo.mainInfo.addition}</i>
          )}
        </div>

        {!isLight && (
          <Image
            src={sectionInfo.picture.file}
            className={styles.section__picture}
            alt={sectionInfo.picture.alt}
          />
        )}
      </SectionLayout>
    </section>
  );
}

export default InfoSection;
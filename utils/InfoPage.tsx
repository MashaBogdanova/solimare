import React from 'react';
import Image from 'next/image';
import PageLayout from '../components/layout/page-layout/PageLayout';
import { IPage } from '../configs/pages.config';
import styles from './_info-page.module.scss';

interface IProps {
  pageInfo: IPage;
}

function InfoPage({ pageInfo }: IProps) {
  return (
    <PageLayout>
      <h1>{pageInfo.title}</h1>
      {pageInfo.description.map((textBlock) => (
        <article
          key={Math.random()}
          className={`${styles.page__textBlock} ${
            textBlock.background === 'dark' && styles.page__textBlock_dark
          }`}
        >
          <div className={styles.page__text}>
            <p className={styles.page__subtitle}>
              {textBlock.subtitle && textBlock.subtitle}
            </p>
            {textBlock.text.map((paragraph) => {
              return typeof paragraph === 'string' ? (
                <p>{paragraph}</p>
              ) : (
                <li className={styles.page__list}>
                  <h4>{paragraph.subtitle && paragraph.subtitle}</h4>
                  <p>{paragraph.text}</p>
                </li>
              );
            })}
            {textBlock.addition && <p>{textBlock.addition}</p>}
          </div>
          {textBlock.picture && (
            <Image
              src={textBlock.picture.file}
              className={styles.page__picture}
              alt={textBlock.picture.alt}
            />
          )}
        </article>
      ))}
    </PageLayout>
  );
}

export default InfoPage;

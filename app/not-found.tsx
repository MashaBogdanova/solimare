'use client';

import React from 'react';
import Link from 'next/link';
import { SettingOutlined } from '@ant-design/icons';
import styles from './_not-found.module.scss';
import contacts from '../configs/contacts.config';

function Error() {
  return (
    <div className={styles.notFound}>
      <h2 className={styles.notFound__text}>
        Ta strona jest w trakcie tworzenia
      </h2>
      <p className={styles.notFound__text}>Wkrótce dodamy informacje</p>
      <SettingOutlined className={styles.notFound__icon} />
      <div className={styles.notFound__links}>
        <Link href="/" className={styles.notFound__link}>
          <p className={styles.notFound__text}>Wróć do strony głównej</p>
        </Link>
        <Link href={contacts.booksyLink} className={styles.notFound__link}>
          <p className={styles.notFound__text}>Zarezerwuj online</p>
        </Link>
      </div>
    </div>
  );
}

export default Error;

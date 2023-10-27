'use client';

import React from 'react';
import Link from 'next/link';
import { SettingOutlined } from '@ant-design/icons';
import contacts from '../configs/contacts.config';
import styles from './_loading-not-found.module.scss';

function Error() {
  return (
    <section className={styles.page}>
      <p>Ta strona jest w trakcie tworzenia</p>
      <p>Wkrótce dodamy informacje</p>
      <SettingOutlined className={styles.page__icon} />
      <div className={styles.page__links}>
        <Link href="/" className={styles.page__link}>
          <p>Wróć do strony głównej</p>
        </Link>
        <Link href={contacts.booksyLink} className={styles.page__link}>
          <p>Zarezerwuj online</p>
        </Link>
      </div>
    </section>
  );
}

export default Error;

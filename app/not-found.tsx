'use client';

import React from 'react';
import Link from 'next/link';
import styles from './_loading-not-found.module.scss';

function Error() {
  return (
    <section className={styles.page}>
      <h1 className={styles.page__title}>404</h1>
      <h2 className={styles.page__subtitle}>Strona nie znaleziona</h2>
      <Link href="/" className={styles.page__link}>
        <p>Wróć do strony głównej</p>
      </Link>
    </section>
  );
}

export default Error;

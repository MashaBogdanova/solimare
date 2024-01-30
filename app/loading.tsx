import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import styles from './_loading-not-found.module.scss';

function Loading() {
  return (
    <section className={styles.page}>
      <LoadingOutlined className={styles.page__icon} />
      <h4>Loading...</h4>
    </section>
  );
}

export default Loading;

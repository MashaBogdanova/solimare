import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import styles from './_loading-error.module.scss';

function Loading() {
  return (
    <div className={styles.page}>
      <LoadingOutlined
        className={`${styles.page__icon} ${styles.page__icon_loading}`}
      />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;

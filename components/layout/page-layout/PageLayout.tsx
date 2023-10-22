'use client';

import React, { ReactNode } from 'react';
import { FloatButton } from 'antd';
import styles from './_page-layout.module.scss';

interface IProps {
  children: ReactNode;
}

function PageLayout({ children }: IProps) {
  return (
    <section className={styles.contentWrapper}>
      {children}
      <FloatButton.BackTop />
    </section>
  );
}

export default PageLayout;

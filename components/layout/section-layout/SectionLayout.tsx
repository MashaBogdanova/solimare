'use client';

import React, { ReactNode } from 'react';
import { FloatButton } from 'antd';
import styles from './_section-layout.module.scss';

interface IProps {
  children: ReactNode;
}

function SectionLayout({ children }: IProps) {
  return (
    <div className={styles.contentWrapper}>
      {children}
      <FloatButton.BackTop />
    </div>
  );
}

export default SectionLayout;

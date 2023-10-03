import React, { ReactNode } from 'react';
import styles from './_page-layout.module.scss';

interface IProps {
  children: ReactNode;
}

function PageLayout({ children }: IProps) {
  return <div className={styles.contentWrapper}>{children}</div>;
}

export default PageLayout;

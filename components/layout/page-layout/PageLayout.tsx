import React, { ReactNode } from 'react';
import styles from './_page-layout.module.scss';

interface IProps {
  children: ReactNode;
}

function PageLayout({ children }: IProps) {
  return <section className={styles.contentWrapper}>{children}</section>;
}

export default PageLayout;

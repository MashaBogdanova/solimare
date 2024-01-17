import React, { ReactNode } from 'react';
import styles from './_section-layout.module.scss';

interface IProps {
  children: ReactNode;
}

function SectionLayout({ children }: IProps) {
  return <div className={styles.contentWrapper}>{children}</div>;
}

export default SectionLayout;

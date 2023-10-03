import React, { ReactNode } from 'react';
import styles from './_layout-width.module.scss';

interface IProps {
  children: ReactNode;
}

function LayoutWidth({ children }: IProps) {
  return <div className={styles.contentWrapper}>{children}</div>;
}

export default LayoutWidth;

'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import lightIcon from '../../public/social-media/booksy-icon-light.svg';
import darkIcon from '../../public/social-media/booksy-icon-dark.svg';
import styles from './_booksy-icon.module.scss';

interface IProps {
  isHeader: boolean;
  isLight: boolean;
}

function BooksyIcon({ isHeader, isLight }: IProps) {
  const pathname = usePathname();

  if (isLight || (isHeader && pathname === '/')) {
    return <Image src={lightIcon} className={styles.booksy} alt="booksy" />;
  }
  return <Image src={darkIcon} className={styles.booksy} alt="booksy" />;
}

export default BooksyIcon;

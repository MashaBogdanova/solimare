'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import lightIcon from '../../../assets/social-media/booksy-icon-light.svg';
import darkIcon from '../../../assets/social-media/booksy-icon-dark.svg';
import styles from './_booksy-icon.module.scss';

interface IProps {
  isHeader: boolean;
}

function BooksyIcon({ isHeader }: IProps) {
  const pathname = usePathname();

  if ((isHeader && pathname === '/') || !isHeader) {
    return <Image src={lightIcon} className={styles.booksy} alt="booksy" />;
  }
  return <Image src={darkIcon} className={styles.booksy} alt="booksy" />;
}

export default BooksyIcon;

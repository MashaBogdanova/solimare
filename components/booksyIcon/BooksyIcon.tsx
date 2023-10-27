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

  return (
    <Image
      src={isLight || (isHeader && pathname === '/') ? lightIcon : darkIcon}
      className={`${styles.booksy} ${isHeader && styles.booksy_animated}`}
      alt="booksy"
    />
  );
}

export default BooksyIcon;

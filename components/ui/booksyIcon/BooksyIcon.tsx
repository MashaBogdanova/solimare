import React from 'react';
import Image from 'next/image';
import lightIcon from '../../../public/social-media/booksy-icon-light.svg';
import styles from './_booksy-icon.module.scss';

interface IProps {
  isHeader: boolean;
}

function BooksyIcon({ isHeader }: IProps) {
  return (
    <Image
      src={lightIcon}
      className={`${styles.booksy} ${isHeader && styles.booksy_animated}`}
      alt="booksy"
    />
  );
}

export default BooksyIcon;

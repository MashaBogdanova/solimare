'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import contacts from '../../configs/contacts.config';
import BooksyIcon from '../booksyIcon/BooksyIcon';
import styles from './_social-media.module.scss';

interface IProps {
  isHeader: boolean;
  isLight: boolean;
}

function SocialMedia({ isHeader, isLight }: IProps) {
  const pathname = usePathname();
  return (
    <div
      className={`${styles.icons} ${
        isLight || (isHeader && pathname === '/') ? styles.icons_light : ''
      } ${isHeader && styles.icons_header}`}
    >
      <Link href={contacts.booksyLink}>
        <BooksyIcon isHeader={isHeader} isLight={isLight} />
      </Link>
      <Link href={contacts.instagramLink}>
        <InstagramOutlined />
      </Link>
      <Link href={contacts.facebookLink}>
        <FacebookOutlined />
      </Link>
    </div>
  );
}

export default SocialMedia;

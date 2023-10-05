'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import styles from './_social-media.module.scss';
import contacts from '../../../configs/contacts.config';
import BooksyIcon from '../booksyIcon/BooksyIcon';

interface IProps {
  isHeader: boolean;
}

function SocialMedia({ isHeader }: IProps) {
  const pathname = usePathname();
  return (
    <div
      className={`${styles.icons} ${
        !isHeader || pathname !== '/contacts' || (isHeader && pathname === '/')
          ? styles.icons_light
          : ''
      } ${isHeader && styles.icons_header}`}
    >
      <Link href={contacts.booksyLink}>
        <BooksyIcon isHeader={isHeader} />
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

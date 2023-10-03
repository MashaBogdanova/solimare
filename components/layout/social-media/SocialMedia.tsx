'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import booksyIcon from '../../../assets/booksy-icon.svg';
import styles from './_social-media.module.scss';
import contacts from '../../../configs/contacts.config';

interface IProps {
  isHeader: boolean;
}

function SocialMedia({ isHeader = false }: IProps) {
  const pathname = usePathname();
  return (
    <div
      className={`${styles.icons} ${
        !isHeader || (isHeader && pathname === '/') ? styles.icons_light : ''
      } ${isHeader && styles.icons_header}`}
    >
      <Link href={contacts.booksy}>
        <Image
          src={booksyIcon}
          className={styles.icons__booksy}
          alt="booksy"
          style={{ fill: 'red' }}
        />
      </Link>
      <Link href={contacts.instagram}>
        <InstagramOutlined />
      </Link>
      <Link href={contacts.facebook}>
        <FacebookOutlined />
      </Link>
    </div>
  );
}

export default SocialMedia;

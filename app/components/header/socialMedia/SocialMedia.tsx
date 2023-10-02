import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import booksyIcon from '../../../../assets/booksy-icon.svg';
import styles from './_socialNedia.module.scss';
import contacts from '../../../../configs/contacts.config';

interface IProps {
  isHeader: boolean;
}

function SocialMedia({ isHeader = false }: IProps) {
  return (
    <div
      className={`${styles.iconsWrapper} ${
        isHeader && styles.headerIconsWrapper
      }`}
    >
      <Link href={contacts.booksy}>
        <Image src={booksyIcon} className={styles.booksyIcon} alt="booksy" />
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

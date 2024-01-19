import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import contacts from '../../../configs/contacts.config';
import lightIcon from '../../../public/social-media/booksy-icon-light.svg';
import styles from './_social-media.module.scss';

interface IProps {
  isHeader?: boolean;
}

function SocialMedia({ isHeader = false }: IProps) {
  return (
    <div className={`${styles.icons} ${isHeader ? styles.icons_header : ''}`}>
      <Link href={contacts.booksyLink}>
        <Image
          src={lightIcon}
          className={`${styles.icons__booksy} ${
            isHeader && styles.icons__booksy_animated
          }`}
          alt="booksy"
        />
      </Link>
      <Link href={contacts.instagramLink}>
        <InstagramOutlined style={{ fontSize: '1.6rem' }} />
      </Link>
      <Link href={contacts.facebookLink}>
        <FacebookOutlined style={{ fontSize: '1.6rem' }} />
      </Link>
    </div>
  );
}

export default SocialMedia;

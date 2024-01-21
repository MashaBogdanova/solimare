import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import contacts from '../../../configs/contacts.config';
import lightIcon from '../../../public/social-media/booksy-icon-light.svg';
import darkIcon from '../../../public/social-media/booksy-icon-dark.svg';
import styles from './_social-media.module.scss';

interface IProps {
  isHeader?: boolean;
  isDark?: boolean;
}

function SocialMedia({ isHeader = false, isDark = false }: IProps) {
  return (
    <div className={`${styles.icons} ${isHeader ? styles.icons_header : ''}`}>
      <Link href={contacts.booksyLink}>
        <Image
          src={isDark ? darkIcon : lightIcon}
          className={`${styles.icons__booksy} ${
            isHeader ? styles.icons__booksy_animated : ''
          }`}
          alt="booksy"
        />
      </Link>
      <Link href={contacts.instagramLink}>
        <InstagramOutlined
          style={{
            fontSize: '1.6rem',
            color: `${isDark ? '#834a4c' : '#f4f1e8'}`,
          }}
        />
      </Link>
      <Link href={contacts.facebookLink}>
        <FacebookOutlined
          style={{
            fontSize: '1.6rem',
            color: `${isDark ? '#834a4c' : '#f4f1e8'}`,
          }}
        />
      </Link>
    </div>
  );
}

export default SocialMedia;

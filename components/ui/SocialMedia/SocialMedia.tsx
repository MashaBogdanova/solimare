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
    <div
      className={`${styles.socialMedia} ${
        isHeader ? styles.socialMedia_header : ''
      }`}
    >
      <Link href={contacts.booksyLink}>
        <Image
          src={isDark ? darkIcon : lightIcon}
          className={`${styles.socialMedia__booksyIcon} ${
            isHeader ? styles.socialMedia__booksyIcon_animated : ''
          }`}
          alt="booksy logo"
        />
      </Link>
      <Link href={contacts.instagramLink}>
        <InstagramOutlined
          className={styles.socialMedia__icon}
          style={{
            color: `${isDark ? '#834a4c' : '#f4f1e8'}`,
          }}
          alt="instagram logo"
        />
      </Link>
      <Link href={contacts.facebookLink}>
        <FacebookOutlined
          className={styles.socialMedia__icon}
          style={{
            color: `${isDark ? '#834a4c' : '#f4f1e8'}`,
          }}
          alt="facebook logo"
        />
      </Link>
    </div>
  );
}

export default SocialMedia;

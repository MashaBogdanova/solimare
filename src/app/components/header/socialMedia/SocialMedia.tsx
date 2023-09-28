import React from 'react';
import Image from 'next/image';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import booksyIcon from '../../../../assets/booksy-icon.svg';
import styles from './_socialNedia.module.scss';

interface IProps {
  isFooter: boolean;
}

function SocialMedia({ isFooter }: IProps) {
  return (
    <div className={isFooter ? styles.footerIconWrapper : styles.iconsWrapper}>
      <Image src={booksyIcon} className={styles.booksyIcon} alt="booksy" />
      <InstagramOutlined />
      <FacebookOutlined />
    </div>
  );
}

export default SocialMedia;

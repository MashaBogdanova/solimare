import React from 'react';
import Image from 'next/image';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import booksyIcon from '../../../../assets/booksy-icon.svg';
import styles from './_socialNedia.module.scss';

interface IProps {
  isHeader?: boolean;
}

function SocialMedia({ isHeader }: IProps) {
  return (
    <div
      className={`${styles.iconsWrapper} ${
        isHeader && styles.headerIconsWrapper
      }`}
    >
      <Image src={booksyIcon} className={styles.booksyIcon} alt="booksy" />
      <InstagramOutlined />
      <FacebookOutlined />
    </div>
  );
}

SocialMedia.defaultProps = {
  isHeader: false,
};

export default SocialMedia;

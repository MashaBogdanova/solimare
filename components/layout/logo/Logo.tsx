import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../assets/logo-white.png';
import styles from './_logo.module.scss';

interface IProps {
  isHeader: boolean;
}

function Logo({ isHeader }: IProps) {
  return (
    <Link href="/">
      <Image
        src={logo}
        width={220}
        className={isHeader ? styles.logo : ''}
        alt="logo"
      />
    </Link>
  );
}

export default Logo;

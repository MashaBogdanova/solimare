import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoLight from '../../../public/logo/logo-light.png';
import styles from './logo.module.scss';

interface IProps {
  isHeader?: boolean;
}

function Logo({ isHeader = false }: IProps) {
  return (
    <Link href="/">
      <Image
        src={logoLight}
        className={isHeader ? styles.logo_header : styles.logo}
        alt="logo"
        quality={100}
        priority
      />
    </Link>
  );
}

export default Logo;

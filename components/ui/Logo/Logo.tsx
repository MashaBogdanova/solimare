import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoLight from '../../../public/logo/logo-light.png';
import styles from './_logo.module.scss';

interface IProps {
  isHeader?: boolean;
}

function Logo({ isHeader = false }: IProps) {
  return (
    <Link href="/">
      <Image
        className={isHeader ? styles.logo_header : styles.logo}
        src={logoLight}
        alt="logo"
      />
    </Link>
  );
}

export default Logo;

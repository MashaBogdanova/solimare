'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logoLight from '../../public/logo/logo-light.png';
import logoDark from '../../public/logo/logo-dark.png';
import styles from './_logo.module.scss';

interface IProps {
  isHeader: boolean;
}

function Logo({ isHeader }: IProps) {
  const pathname = usePathname();
  return (
    <Link href="/">
      {(isHeader && pathname === '/') || !isHeader ? (
        <Image
          src={logoLight}
          width={220}
          className={isHeader ? styles.logo_header : ''}
          alt="logo"
        />
      ) : (
        <Image
          src={logoDark}
          width={220}
          className={isHeader ? styles.logo_header : ''}
          alt="logo"
        />
      )}
    </Link>
  );
}

export default Logo;

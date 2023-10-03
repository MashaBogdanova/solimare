'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MenuOutlined } from '@ant-design/icons';
import SocialMedia from '../socialMedia/SocialMedia';
import SideMenu from '../sideMenu/SideMenu';
import Nav from '../nav/Nav';
import Logo from '../logo/Logo';
import styles from './_header.module.scss';

function Header() {
  const [isSideMenuVisible, setSideMenuVisible] = useState(false);
  const [isAnimated, setAnimated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSideMenuVisible(false);
  }, [pathname]);

  return (
    <header>
      <Logo isHeader />
      <SocialMedia isHeader />
      <Nav />
      <MenuOutlined
        className={`${styles.menuIcon} ${
          isAnimated && styles.menuIconAnimated
        }`}
        onClick={() => {
          setSideMenuVisible((value) => !value);
          setAnimated((value) => !value);
        }}
      />
      <SideMenu isVisible={isSideMenuVisible} />
    </header>
  );
}

export default Header;

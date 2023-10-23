'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import SocialMedia from '../../social-media/SocialMedia';
import SideMenu from '../../side-menu/SideMenu';
import Nav from '../../nav/Nav';
import Logo from '../../logo/Logo';
import BurgerIcon from '../../burger-icon/BurgerIcon';
import styles from './_header.module.scss';

function Header() {
  const [isSideMenuVisible, setSideMenuVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSideMenuVisible(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <Logo isHeader />
      <SocialMedia isHeader isLight={false} />
      <Nav />
      <BurgerIcon setSideMenuVisible={setSideMenuVisible} />
      <SideMenu isVisible={isSideMenuVisible} />
    </header>
  );
}

export default Header;

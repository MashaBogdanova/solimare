'use client';

import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';
import styles from './_header.module.scss';
import logo from '../../../assets/logo-white.png';
import SocialMedia from './socialMedia/SocialMedia';
import SideMenu from './sideMenu/SideMenu';
import Nav from './nav/Nav';

function Header() {
  const [isSideMenuVisible, setSideMenuVisible] = useState(false);
  const [isAnimated, setAnimated] = useState(false);

  return (
    <header>
      <Image src={logo} width={220} className={styles.logo} alt="logo" />
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

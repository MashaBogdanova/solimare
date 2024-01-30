'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import SocialMedia from '../../ui/SocialMedia/SocialMedia';
import SideMenu from '../SideMenu/SideMenu';
import Nav from '../Nav/Nav';
import Logo from '../../ui/Logo/Logo';
import BurgerIcon from '../../ui/BurgerIcon/BurgerIcon';

function Header() {
  const [isSideMenuVisible, setSideMenuVisible] = useState(false);
  const [isNavVisible, setNavVisible] = useState(true);
  const [isBurgerIconAnimated, setBurgerIconAnimated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSideMenuVisible(false);
    if (pathname === '/') {
      setNavVisible(true);
    } else {
      setNavVisible(false);
    }
  }, [pathname]);

  return (
    <header>
      <Logo isHeader />
      <SocialMedia isHeader />
      {isNavVisible && <Nav />}
      <BurgerIcon
        isAnimated={isBurgerIconAnimated}
        setAnimated={setBurgerIconAnimated}
        setSideMenuVisible={setSideMenuVisible}
      />
      <SideMenu
        isVisible={isSideMenuVisible}
        setVisible={setSideMenuVisible}
        setBurgerIconAnimated={setBurgerIconAnimated}
      />
    </header>
  );
}

export default Header;

'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import SocialMedia from '../../ui/social-media/SocialMedia';
import SideMenu from '../../ui/side-menu/SideMenu';
import Nav from '../Nav/Nav';
import Logo from '../../ui/logo/Logo';
import BurgerIcon from '../../ui/burger-icon/BurgerIcon';

function Header() {
  const [isSideMenuVisible, setSideMenuVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSideMenuVisible(false);
  }, [pathname]);

  return (
    <header>
      <Logo isHeader />
      <SocialMedia isHeader />
      <Nav isSideMenu={false} />
      <BurgerIcon setSideMenuVisible={setSideMenuVisible} />
      <SideMenu isVisible={isSideMenuVisible} />
    </header>
  );
}

export default Header;
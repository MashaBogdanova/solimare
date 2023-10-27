'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MenuOutlined } from '@ant-design/icons';
import styles from './_burger.module.scss';

interface IProps {
  setSideMenuVisible: (value) => void;
}

function BurgerIcon({ setSideMenuVisible }: IProps) {
  const [isAnimated, setAnimated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setAnimated(false);
  }, [pathname]);

  return (
    <MenuOutlined
      className={`${styles.menuIcon} ${
        pathname === '/' && styles.menuIcon_light
      } ${isAnimated && styles.menuIcon_animated}`}
      onClick={() => {
        setSideMenuVisible((value) => !value);
        setAnimated((value) => !value);
      }}
    />
  );
}

export default BurgerIcon;

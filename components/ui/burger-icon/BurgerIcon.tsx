'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MenuOutlined } from '@ant-design/icons';
import styles from './_burgerIcon.module.scss';

interface IProps {
  setSideMenuVisible: Dispatch<SetStateAction<boolean>>;
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

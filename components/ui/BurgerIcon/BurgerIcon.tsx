'use client';

import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MenuOutlined } from '@ant-design/icons';
import styles from './_burger-icon.module.scss';

interface IProps {
  isAnimated: boolean;
  setAnimated: Dispatch<SetStateAction<boolean>>;
  setSideMenuVisible: Dispatch<SetStateAction<boolean>>;
}

function BurgerIcon({ isAnimated, setAnimated, setSideMenuVisible }: IProps) {
  const pathname = usePathname();

  useEffect(() => {
    setAnimated(false);
  }, [pathname]);

  return (
    <MenuOutlined
      className={`${styles.menuIcon}  ${
        isAnimated ? styles.menuIcon_animated : ''
      }`}
      onClick={() => {
        setSideMenuVisible((value) => !value);
        setAnimated((value) => !value);
      }}
    />
  );
}

export default BurgerIcon;

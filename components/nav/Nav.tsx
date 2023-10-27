import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Collapse, Popover } from 'antd';
import navItems from '../../configs/navigation.config';
import SubItems from './SubItems';
import styles from './_nav.module.scss';

interface IProps {
  isSideMenu: boolean;
}

const SCREEN_WIDTH_SMALL = 920;

function Nav({ isSideMenu }: IProps) {
  const [isSmallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    if (window?.innerWidth <= SCREEN_WIDTH_SMALL) {
      setSmallScreen(true);
    }
  }, []);

  return (
    <nav className={isSideMenu ? styles.sideMenu : styles.nav}>
      {navItems.map((item, key) => {
        if (item.children && isSmallScreen) {
          return (
            <Collapse
              ghost
              key={item.key}
              items={[
                {
                  key,
                  label: item.label,
                  children: SubItems(item.children),
                },
              ]}
            />
          );
        }

        if (item.children && !isSmallScreen) {
          return (
            <Popover
              placement="bottom"
              content={
                <div className={styles.nav__popover}>
                  {SubItems(item.children)}
                </div>
              }
              trigger="hover"
              key={item.key}
            >
              {item.label}
            </Popover>
          );
        }

        return (
          <Link key={item.key} href={item.key}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;

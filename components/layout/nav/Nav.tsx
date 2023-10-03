import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Collapse, Popover } from 'antd';
import navItems from '../../../configs/navigation.config';
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

  function createSubItems(children) {
    return children.map((subItem) => (
      <p key={subItem.key}>
        <Link href={subItem.key}>{subItem.label}</Link>
      </p>
    ));
  }

  return (
    <nav className={isSideMenu ? styles.sideMenuNav : styles.nav}>
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
                  children: createSubItems(item.children),
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
                <div style={{ width: 150 }}>
                  {createSubItems(item.children)}
                </div>
              }
              trigger="hover"
              key={item.key}
            >
              <p>{item.label}</p>
            </Popover>
          );
        }
        return (
          <Link key={item.key} href={item.key} className={styles.navItem}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;

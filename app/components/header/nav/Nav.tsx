import React from 'react';
import Link from 'next/link';
import { Popover } from 'antd';
import navItems from '../../../../configs/navigation.config';
import styles from './_nav.module.scss';

interface IProps {
  isSideMenu: boolean;
}

function Nav({ isSideMenu }: IProps) {
  function createSubItems(children) {
    return children.map((subItem) => (
      <p>
        <Link href={subItem.key}>{subItem.label}</Link>
      </p>
    ));
  }

  return (
    <nav className={isSideMenu ? styles.sideMenuNav : styles.nav}>
      {navItems.map((item) => {
        if (item.children) {
          return (
            <Popover
              placement="bottom"
              content={
                <div style={{ width: 150 }}>
                  {createSubItems(item.children)}
                </div>
              }
              trigger="hover"
            >
              <p>{item.label}</p>
            </Popover>
          );
        }
        return <Link href={item.key}>{item.label}</Link>;
      })}
    </nav>
  );
}

export default Nav;

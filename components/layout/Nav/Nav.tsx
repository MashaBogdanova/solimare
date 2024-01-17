import React from 'react';
import Link from 'next/link';
import navItems from '../../../configs/navigation.config';
import styles from './_nav.module.scss';

interface IProps {
  isSideMenu: boolean;
}

function Nav({ isSideMenu }: IProps) {
  return (
    <nav className={isSideMenu ? styles.sideMenu : styles.nav}>
      {navItems.map((item) => {
        return (
          <Link
            className={styles.nav__link}
            key={item.key}
            href={`#${item.key}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;

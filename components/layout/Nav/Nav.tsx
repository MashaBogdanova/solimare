import React, { Dispatch, SetStateAction } from 'react';
import navItems from '../../../configs/navigation.config';
import styles from './nav.module.scss';

interface IProps {
  isSideMenu?: boolean;
  setVisible?: (isVisible: boolean) => void;
  setBurgerIconAnimated?: Dispatch<SetStateAction<boolean>>;
}

function Nav({
  isSideMenu = false,
  setVisible,
  setBurgerIconAnimated,
}: IProps) {
  const clickHandler = () => {
    if (setVisible) {
      setVisible(false);
    }
    if (setBurgerIconAnimated) {
      setBurgerIconAnimated(false);
    }
  };
  return (
    <nav className={isSideMenu ? styles.nav_aside : styles.nav}>
      {navItems.map((item) => {
        return (
          <a
            className={isSideMenu ? styles.nav__link_aside : styles.nav__link}
            href={`#${item.key}`}
            key={item.key}
            onClick={clickHandler}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}

export default Nav;

import React, { Dispatch, SetStateAction } from 'react';
import SocialMedia from '../../ui/SocialMedia/SocialMedia';
import Nav from '../Nav/Nav';
import styles from './_side-menu.module.scss';

interface IProps {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
  setBurgerIconAnimated: Dispatch<SetStateAction<boolean>>;
}

function SideMenu({ isVisible, setVisible, setBurgerIconAnimated }: IProps) {
  return (
    <aside
      className={`${styles.sideMenu} ${
        isVisible ? styles.sideMenu_visible : ''
      }`}
    >
      <Nav
        isSideMenu
        setVisible={setVisible}
        setBurgerIconAnimated={setBurgerIconAnimated}
      />
      <SocialMedia />
    </aside>
  );
}

export default SideMenu;

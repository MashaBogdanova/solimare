import React from 'react';
import styles from './_sideMenu.module.scss';
import SocialMedia from '../socialMedia/SocialMedia';
import Nav from '../nav/Nav';

interface IProps {
  isVisible: boolean;
}

function SideMenu({ isVisible }: IProps) {
  return (
    <div
      className={`${styles.sideMenu} ${isVisible && styles.sideMenuVisible}`}
    >
      {isVisible && <Nav isSideMenu />}
      <SocialMedia />
    </div>
  );
}

export default SideMenu;

import React from 'react';
import styles from './_side-menu.module.scss';
import SocialMedia from '../social-media/SocialMedia';
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

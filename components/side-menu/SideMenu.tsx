import React from 'react';
import SocialMedia from '../social-media/SocialMedia';
import Nav from '../nav/Nav';
import styles from './_side-menu.module.scss';

interface IProps {
  isVisible: boolean;
}

function SideMenu({ isVisible }: IProps) {
  return (
    <div
      className={`${styles.sideMenu} ${isVisible && styles.sideMenu_visible}`}
    >
      {isVisible && <Nav isSideMenu />}
      <div className={styles.sideMenu__socialMedia}>
        <SocialMedia isHeader={false} isLight />
      </div>
    </div>
  );
}

export default SideMenu;

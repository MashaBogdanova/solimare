import React from 'react';
import SocialMedia from '../social-media/SocialMedia';
import Nav from '../../layout/Nav/Nav';
import styles from './_side-menu.module.scss';

interface IProps {
  isVisible: boolean;
}

function SideMenu({ isVisible }: IProps) {
  return (
    <aside
      className={`${styles.sideMenu} ${isVisible && styles.sideMenu_visible}`}
    >
      {isVisible && <Nav isSideMenu />}
      <div className={styles.sideMenu__socialMedia}>
        <SocialMedia />
      </div>
    </aside>
  );
}

export default SideMenu;

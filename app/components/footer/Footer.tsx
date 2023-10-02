import React from 'react';
import Image from 'next/image';
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import styles from './_footer.module.scss';
import logo from '../../../assets/logo-white.png';
import SocialMedia from '../header/socialMedia/SocialMedia';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={logo} width={180} alt="logo" />
      <div className={styles.addresses}>
        <div className={styles.address}>
          <EnvironmentOutlined />
          <span>ul. Mandarynki 12, 02-796 Warsaw</span>
        </div>
        <div className={styles.address}>
          <MailOutlined />
          <span>sollsolimare@gmail.com</span>
        </div>
        <div className={styles.address}>
          <PhoneOutlined />
          <span>506-815-888</span>
        </div>
      </div>
      <div className={styles.socialNetworks}>
        <p>Follow us</p>
        <SocialMedia isFooter />
      </div>
    </footer>
  );
}

export default Footer;

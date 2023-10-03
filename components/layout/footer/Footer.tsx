import React from 'react';
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import SocialMedia from '../socialMedia/SocialMedia';
import Logo from '../logo/Logo';
import styles from './_footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo isHeader={false} />
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

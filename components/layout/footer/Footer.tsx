import React from 'react';
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import SocialMedia from '../social-media/SocialMedia';
import Logo from '../logo/Logo';
import styles from './_footer.module.scss';
import { Divider } from 'antd';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo isHeader={false} />
      <div className={styles.footer__addresses}>
        <div className={styles.footer__address}>
          <EnvironmentOutlined />
          <span>ul. Mandarynki 12, 02-796 Warsaw</span>
        </div>
        <div className={styles.footer__address}>
          <MailOutlined />
          <span>sollsolimare@gmail.com</span>
        </div>
        <div className={styles.footer__address}>
          <PhoneOutlined />
          <span>506-815-888</span>
        </div>
        <Divider className={styles.footer__divider} />
      </div>
      <div className={styles.footer__socialNetworks}>
        <h4>Follow us</h4>
        <SocialMedia isHeader={false} />
      </div>
    </footer>
  );
}

export default Footer;

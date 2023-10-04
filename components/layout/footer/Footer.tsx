import React from 'react';
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { Divider } from 'antd';
import SocialMedia from '../social-media/SocialMedia';
import Logo from '../logo/Logo';
import addressInfo from '../../../configs/address.config';
import styles from './_footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo isHeader={false} />
      <div className={styles.footer__addresses}>
        <div className={styles.footer__address}>
          <EnvironmentOutlined />
          <span>{addressInfo.address}</span>
        </div>
        <div className={styles.footer__address}>
          <MailOutlined />
          <a href={`mailto:${addressInfo.email}`}>{addressInfo.email}</a>
        </div>
        <div className={styles.footer__address}>
          <PhoneOutlined />
          <a href={`tel://${addressInfo.telephone}`}>{addressInfo.telephone}</a>
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

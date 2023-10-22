import React from 'react';
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { Divider } from 'antd';
import SocialMedia from '../../social-media/SocialMedia';
import Logo from '../../logo/Logo';
import contacts from '../../../configs/contacts.config';
import styles from './_footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo isHeader={false} />
      <div className={styles.footer__addresses}>
        <div className={styles.footer__address}>
          <EnvironmentOutlined />
          <a href={contacts.googleMapLink}>{contacts.address}</a>
        </div>
        <div className={styles.footer__address}>
          <MailOutlined />
          <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
        </div>
        <div className={styles.footer__address}>
          <PhoneOutlined />
          <a href={`tel://${contacts.telephone}`}>{contacts.telephone}</a>
        </div>
        <Divider className={styles.footer__divider} />
      </div>
      <div className={styles.footer__socialNetworks}>
        <h4 className={styles.footer__followUs}>Follow us</h4>
        <SocialMedia isHeader={false} isLight />
      </div>
    </footer>
  );
}

export default Footer;

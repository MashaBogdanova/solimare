import React from 'react';
import Link from 'next/link';
import { Divider } from 'antd';
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import contacts from '../../../configs/contacts.config';
import SocialMedia from '../../social-media/SocialMedia';
import Logo from '../../logo/Logo';
import styles from './_footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo isHeader={false} />

      <section className={styles.footer__addresses}>
        <article className={styles.footer__address}>
          <EnvironmentOutlined />
          <Link href={contacts.googleMapLink}>{contacts.address}</Link>
        </article>
        <article className={styles.footer__address}>
          <MailOutlined />
          <Link href={`mailto:${contacts.email}`}>{contacts.email}</Link>
        </article>
        <article className={styles.footer__address}>
          <PhoneOutlined />
          <Link href={`tel://${contacts.telephone}`}>{contacts.telephone}</Link>
        </article>
        <Divider className={styles.footer__divider} />
      </section>

      <section className={styles.footer__socialNetworks}>
        <h4 className={styles.footer__followUs}>Follow us</h4>
        <SocialMedia isHeader={false} isLight />
      </section>
    </footer>
  );
}

export default Footer;

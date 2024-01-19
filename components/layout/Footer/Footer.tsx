import React from 'react';
import Link from 'next/link';
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import contacts from '../../../configs/contacts.config';
import SocialMedia from '../../ui/social-media/SocialMedia';
import Logo from '../../ui/logo/Logo';
import styles from './_footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />

      <section className={styles.footer__addressesList}>
        <article className={styles.footer__address}>
          <EnvironmentOutlined />
          <Link className={styles.footer__link} href={contacts.googleMapLink}>
            {contacts.address}
          </Link>
        </article>
        <article className={styles.footer__address}>
          <MailOutlined />
          <Link
            className={styles.footer__link}
            href={`mailto:${contacts.email}`}
          >
            {contacts.email}
          </Link>
        </article>
        <article className={styles.footer__address}>
          <PhoneOutlined />
          <Link
            className={styles.footer__link}
            href={`tel://${contacts.telephone}`}
          >
            {contacts.telephone}
          </Link>
        </article>
      </section>

      <section className={styles.footer__socialNetworks}>
        <p className={styles.footer__followUs}>Follow us</p>
        <SocialMedia />
      </section>
    </footer>
  );
}

export default Footer;

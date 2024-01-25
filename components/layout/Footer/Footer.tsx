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
      <section className={styles.footer__contactsList}>
        <article className={styles.footer__contact}>
          <EnvironmentOutlined className={styles.footer__contactIcon} />
          <Link
            className={styles.footer__contactLink}
            href={contacts.googleMapLink}
          >
            {contacts.address}
          </Link>
        </article>
        <article className={styles.footer__contact}>
          <MailOutlined className={styles.footer__contactIcon} />
          <Link
            className={styles.footer__contactLink}
            href={`mailto:${contacts.email}`}
          >
            {contacts.email}
          </Link>
        </article>
        <article className={styles.footer__contact}>
          <PhoneOutlined className={styles.footer__contactIcon} />
          <Link
            className={styles.footer__contactLink}
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

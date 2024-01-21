import React from 'react';
import Link from 'next/link';
import contacts from '../../../configs/contacts.config';
import SocialMedia from '../../ui/social-media/SocialMedia';
import styles from './_contacts-info.module.scss';

function ContactsInfo() {
  return (
    <div className={styles.contactsInfo}>
      <div className={styles.contactsInfo__block}>
        <h3>Kontakt</h3>
        <p>{contacts.address}</p>
        <Link href={`tel://${contacts.telephone}`}>{contacts.telephone}</Link>
        <Link href={`mailto:${contacts.email}`}>{contacts.email}</Link>
      </div>
      <div className={styles.contactsInfo__block}>
        <h3 className={styles.contactsInfo__title}>Godziny pracy</h3>
        <p>Poniedziałek - piątek </p>
        <p className={styles.contactsInfo__weekHours}>{contacts.weekHours}</p>
        <p>Sobota i niedziela </p>
        <p>{contacts.weekendHours}</p>
      </div>
      <SocialMedia isDark />
    </div>
  );
}

export default ContactsInfo;

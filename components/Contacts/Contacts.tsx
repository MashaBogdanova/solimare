import React from 'react';
import Link from 'next/link';
import contacts from '../../configs/contacts.config';
import SectionLayout from '../layout/Section-layout/SectionLayout';
import SocialMedia from '../ui/social-media/SocialMedia';
import Map from '../Map/Map';
import styles from './_contacts.module.scss';

function Contacts() {
  return (
    <section className={styles.contacts} id="kontakt">
      <SectionLayout>
        <div className={styles.contacts__text}>
          <div className={styles.contacts__block}>
            <h3 className={styles.contacts__title}>Kontakt</h3>
            <p>{contacts.address}</p>
            <Link href={`tel://${contacts.telephone}`}>
              {contacts.telephone}
            </Link>
            <Link href={`mailto:${contacts.email}`}>{contacts.email}</Link>
          </div>
          <div className={styles.contacts__block}>
            <h3 className={styles.contacts__title}>Godziny pracy</h3>
            <p>Poniedziałek - piątek </p>
            <p className={styles.contacts__weekHours}>{contacts.weekHours}</p>
            <p>Sobota i niedziela </p>
            <p>{contacts.weekendHours}</p>
          </div>
          <SocialMedia />
        </div>
        <Map />
      </SectionLayout>
    </section>
  );
}

export default Contacts;

import React from 'react';
import Link from 'next/link';
import contacts from '../../configs/contacts.config';
import SectionLayout from '../layout/section-layout/SectionLayout';
import SocialMedia from '../social-media/SocialMedia';
import Map from '../map/Map';
import styles from './_contacts.module.scss';

function Contacts() {
  return (
    <section className={styles.contacts__wrapper}>
      <SectionLayout hash="kontakt">
        <div className={styles.contacts}>
          <div className={styles.contacts__textBlock}>
            <h1>Kontakt</h1>
            <p>{contacts.address}</p>
            <Link href={`tel://${contacts.telephone}`}>
              {contacts.telephone}
            </Link>
            <Link href={`mailto:${contacts.email}`}>{contacts.email}</Link>
            <h4>Poniedziałek - piątek </h4>
            {contacts.weekHours}
            <h4>Sobota i niedziela </h4>
            {contacts.weekendHours}
            <SocialMedia isHeader={false} isLight={false} />
          </div>
          <Map />
        </div>
      </SectionLayout>
    </section>
  );
}

export default Contacts;

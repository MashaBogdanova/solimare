import React from 'react';
import PageLayout from '../../components/layout/page-layout/PageLayout';
import Map from '../../components/map/Map';
import SocialMedia from '../../components/social-media/SocialMedia';
import contacts from '../../configs/contacts.config';
import styles from './_contacts.module.scss';

function Contacts() {
  return (
    <PageLayout>
      <div className={styles.contacts}>
        <div className={styles.contacts__textBlock}>
          <h1>Kontakt</h1>
          <p>{contacts.address}</p>
          <a href={`tel://${contacts.telephone}`}>{contacts.telephone}</a>
          <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          <h4>Poniedziałek - piątek </h4>
          {contacts.weekHours}
          <h4>Sobota i niedziela </h4>
          {contacts.weekendHours}
          <SocialMedia isHeader={false} isLight={false} />
        </div>
        <Map />
      </div>
    </PageLayout>
  );
}

export default Contacts;

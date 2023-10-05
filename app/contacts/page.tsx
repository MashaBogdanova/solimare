import React from 'react';
import PageLayout from '../../components/layout/layout-width/PageLayout';
import Map from '../../components/map/Map';
import styles from './_contacts.module.scss';
import contacts from '../../configs/contacts.config';
import SocialMedia from '../../components/layout/social-media/SocialMedia';

function Contacts() {
  return (
    <PageLayout>
      <section className={styles.contacts}>
        <div className={styles.contacts__text}>
          <h1>Kontakt</h1>
          <p>{contacts.address}</p>
          <a href={`tel://${contacts.telephone}`}>{contacts.telephone}</a>
          <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          <p>
            <h4>Poniedziałek - piątek </h4>
            {contacts.weekHours}
          </p>
          <p>
            <h4>Sobota i niedziela </h4>
            {contacts.weekendHours}
          </p>
          <SocialMedia isHeader={false} />
        </div>
        <Map />
      </section>
    </PageLayout>
  );
}

export default Contacts;

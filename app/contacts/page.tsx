import React from 'react';
import PageLayout from '../../components/layout/layout-width/PageLayout';
import Map from '../../components/map/Map';
import styles from './_contacts.module.scss';
import addressInfo from '../../configs/address.config';
import SocialMedia from '../../components/layout/social-media/SocialMedia';

function Contacts() {
  return (
    <PageLayout>
      <section className={styles.contacts}>
        <div className={styles.contacts__text}>
          <h1>Kontakt</h1>
          <p>{addressInfo.address}</p>
          <a href={`tel://${addressInfo.telephone}`}>{addressInfo.telephone}</a>
          <a href={`mailto:${addressInfo.email}`}>{addressInfo.email}</a>
          <p>
            <h4>Poniedziałek - piątek </h4>
            {addressInfo.weekHours}
          </p>
          <p>
            <h4>Sobota i niedziela </h4>
            {addressInfo.weekendHours}
          </p>
          <SocialMedia isHeader={false} />
        </div>
        <Map />
      </section>
    </PageLayout>
  );
}

export default Contacts;

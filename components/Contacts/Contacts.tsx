import React from 'react';
import SectionLayout from '../layout/Section-layout/SectionLayout';
import Map from './Map/Map';
import ContactsInfo from './ContactsInfo/ContactsInfo';
import styles from './_contacts.module.scss';

function Contacts() {
  return (
    <section className={styles.contacts} id="kontakt">
      <SectionLayout>
        <ContactsInfo />
        <Map />
      </SectionLayout>
    </section>
  );
}

export default Contacts;

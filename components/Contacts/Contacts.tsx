import React from 'react';
import Map from './Map/Map';
import ContactsInfo from './ContactsInfo/ContactsInfo';
import styles from './_contacts.module.scss';

function Contacts() {
  return (
    <section className={styles.contacts} id="kontakt">
      <ContactsInfo />
      <Map />
    </section>
  );
}

export default Contacts;

import React from 'react';
import PartnersCard from './PartnersCard/PartnersCard';
import PriceCard from './PriceCard/PriceCard';
import { prices } from '../../configs/price.config';
import styles from './price.module.scss';

function Price() {
  return (
    <section className={styles.price} id="cennik">
      <div className={styles.price__content}>
        <h2 className={styles.price__title}>Cennik</h2>
        <ul className={styles.price__list}>
          {prices.map((price) => (
            <PriceCard price={price} key={price.label} />
          ))}
        </ul>
        <PartnersCard />
      </div>
    </section>
  );
}

export default Price;

import React from 'react';
import Partners from './Partners/Partners';
import PriceBlock from './PriceBlock/PriceBlock';
import { prices } from '../../configs/price.config';
import styles from './_price.module.scss';

function Price() {
  return (
    <section className={styles.price} id="cennik">
      <div className={styles.price__content}>
        <h2 className={styles.price__title}>Cennik</h2>
        <article>
          <ul className={styles.price__list}>
            {prices.map((price) => (
              <PriceBlock price={price} />
            ))}
          </ul>
        </article>
        <Partners />
      </div>
    </section>
  );
}

export default Price;

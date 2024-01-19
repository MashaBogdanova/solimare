import React from 'react';
import SectionLayout from '../layout/Section-layout/SectionLayout';
import Partners from './Partners/Partners';
import PriceBlock from './PriceBlock/PriceBlock';
import { prices } from '../../configs/price.config';
import styles from './_price.module.scss';

function Price() {
  return (
    <SectionLayout>
      <section id="cennik">
        <article className={styles.price}>
          <h2 className={styles.price__title}>Cennik</h2>
          <ul className={styles.price__list}>
            {prices.map((price) => (
              <PriceBlock price={price} />
            ))}
          </ul>
        </article>
        <Partners />
      </section>
    </SectionLayout>
  );
}

export default Price;

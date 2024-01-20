import React from 'react';
import SectionLayout from '../layout/Section-layout/SectionLayout';
import Partners from './Partners/Partners';
import PriceBlock from './PriceBlock/PriceBlock';
import { prices } from '../../configs/price.config';
import styles from './_price.module.scss';

function Price() {
  return (
    <section className={styles.price} id="cennik">
      <SectionLayout>
        <div>
          <article>
            <h2 className={styles.price__title}>Cennik</h2>
            <ul className={styles.price__list}>
              {prices.map((price) => (
                <PriceBlock price={price} />
              ))}
            </ul>
          </article>
          <Partners />
        </div>
      </SectionLayout>
    </section>
  );
}

export default Price;

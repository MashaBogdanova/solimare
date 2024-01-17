import React from 'react';
import { Price } from '../../../configs/price.config';
import styles from './_price-block.module.scss';

interface Props {
  price: Price;
}

function PriceBlock({ price }: Props) {
  return (
    <li className={styles.priceBlock} key={price.label}>
      <div className={styles.priceBlock__main}>
        <h3>{price.label}</h3>
        {price.tickets.map((ticket) => {
          return (
            <article key={ticket.title}>
              <div className={styles.priceBlock__line}>
                <div>
                  <p>{ticket.title}</p>
                  {ticket.subtitle && <p>{ticket.subtitle}</p>}
                </div>
                <p>{ticket.bilet}</p>
              </div>
              {ticket.karnet && (
                <div className={styles.priceBlock__line}>
                  <p>Karnet </p>
                  <p>{ticket.karnet}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {price.addition && (
        <i className={styles.priceBlock__addition}>{price.addition}</i>
      )}
    </li>
  );
}

export default PriceBlock;

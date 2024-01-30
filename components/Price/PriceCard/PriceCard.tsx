import React from 'react';
import { Price } from '../../../configs/price.config';
import styles from './_price-card.module.scss';

interface Props {
  price: Price;
}

function PriceCard({ price }: Props) {
  return (
    <li className={styles.priceCard} key={price.label}>
      <div className={styles.priceCard__main}>
        <h3 className={styles.priceCard__title}>{price.label}</h3>
        {price.tickets.map((ticket) => {
          return (
            <article key={ticket.title}>
              <div className={styles.priceCard__line}>
                <div>
                  <p>{ticket.title}</p>
                  {ticket.subtitle && <p>{ticket.subtitle}</p>}
                </div>
                <p>{ticket.bilet}</p>
              </div>
              {ticket.karnet && (
                <div className={styles.priceCard__line}>
                  <p>Karnet </p>
                  <p>{ticket.karnet}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {price.addition && (
        <i className={styles.priceCard__addition}>{price.addition}</i>
      )}
    </li>
  );
}

export default PriceCard;

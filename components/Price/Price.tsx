import React from 'react';
import Image from 'next/image';
import prices from '../../configs/price.config';
import card1 from '../../public/price/multisport.png';
import card2 from '../../public/price/medicover.png';
import card3 from '../../public/price/fit-profit.png';
import card4 from '../../public/price/pzu.png';
import styles from './_price.module.scss';
import SectionLayout from '../layout/section-layout/SectionLayout';

function Price() {
  const cards = [card1, card2, card3, card4];

  return (
    <section>
      <SectionLayout hash="cennik">
        <h2 className={styles.price__title}>Price</h2>
        <div className={styles.price}>
          {prices.map((price) => {
            return (
              <article className={styles.price__block}>
                <h3 className={styles.price__subtitle}>{price.label}</h3>
                {price.tickets.map((ticket) => {
                  return (
                    <article className={styles.price__line}>
                      <div>
                        {ticket.title}
                        {ticket.bilet}
                      </div>
                      {ticket.karnet && <div>Karnet* {ticket.karnet}</div>}
                    </article>
                  );
                })}
                {price.addition && (
                  <p className={styles.price__addition}>{price.addition}</p>
                )}
              </article>
            );
          })}
          <article className={styles.price__partners}>
            <h4>Akceptujemy karty</h4>
            <div className={styles.price__partnersCards}>
              {cards.map((card) => (
                <Image src={card} height={40} alt="card" key={card.src} />
              ))}
            </div>
          </article>
        </div>
      </SectionLayout>
    </section>
  );
}

export default Price;

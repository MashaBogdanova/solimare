import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { partners } from '../../../configs/price.config';
import styles from './_partners-card.module.scss';

function PartnersCard() {
  return (
    <article className={styles.partners}>
      <h3 className={styles.partners__title}>Akceptujemy karty</h3>
      <div className={styles.partners__cardsList}>
        {partners.map((card) => (
          <Link href={card.link} target="_blank" key={card.name}>
            <Image
              className={styles.partners__card}
              src={card.image}
              alt="partner card"
            />
          </Link>
        ))}
      </div>
    </article>
  );
}

export default PartnersCard;

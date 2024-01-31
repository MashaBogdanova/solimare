import React from 'react';
import Image from 'next/image';
import { Benefit } from '../../../configs/salt-cave-benefits';
import styles from './benefit-card.module.scss';

interface Props {
  benefit: Benefit;
}

function BenefitCard({ benefit }: Props) {
  return (
    <article className={styles.benefitCard}>
      <Image src={benefit.icon} className={styles.benefitCard__icon} alt="" />
      <h3 className={styles.benefitCard__title}>{benefit.title}</h3>
      <p className={styles.benefitCard__text}>{benefit.text}</p>
    </article>
  );
}

export default BenefitCard;

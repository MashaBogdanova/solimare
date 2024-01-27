import React from 'react';
import Image from 'next/image';
import { Benefit } from '../../../configs/saltCaveBenefits';
import styles from './_benefitCard.module.scss';

interface Props {
  benefit: Benefit;
}

function BenefitCard({ benefit }: Props) {
  return (
    <article className={styles.benefitCard}>
      <Image
        className={styles.benefitCard__icon}
        src={benefit.icon.file}
        alt={benefit.icon.alt}
      />
      <h3 className={styles.benefitCard__title}>{benefit.title}</h3>
      <p className={styles.benefitCard__text}>{benefit.text}</p>
    </article>
  );
}

export default BenefitCard;

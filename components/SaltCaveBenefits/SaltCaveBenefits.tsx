import React from 'react';
import saltCaveBenefits from '../../configs/salt-cave-benefits';
import BenefitCard from './BenefitCard/BenefitCard';
import styles from './_salt-cave-benefits.module.scss';

function SaltCaveBenefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefits__content}>
        {saltCaveBenefits.map((benefit) => (
          <BenefitCard benefit={benefit} key={benefit.title} />
        ))}
      </div>
    </section>
  );
}

export default SaltCaveBenefits;

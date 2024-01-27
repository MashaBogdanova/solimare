import React from 'react';
import saltCaveBenefits from '../../configs/saltCaveBenefits';
import BenefitCard from './BenefitCard/BenefitCard';
import styles from './_salt-cave-benefits.module.scss';

function SaltCaveBenefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefits__content}>
        {saltCaveBenefits.map((benefit) => (
          <BenefitCard benefit={benefit} key={benefit.icon.alt} />
        ))}
      </div>
    </section>
  );
}

export default SaltCaveBenefits;

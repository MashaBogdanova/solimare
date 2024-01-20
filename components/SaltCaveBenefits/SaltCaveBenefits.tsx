import React from 'react';
import Image from 'next/image';
import SectionLayout from '../layout/Section-layout/SectionLayout';
import styles from './_salt-cave-benefits.module.scss';
import saltCaveBenefits from '../../configs/saltCaveBenefits';

function SaltCaveBenefits() {
  return (
    <section className={styles.benefits}>
      <SectionLayout>
        <div className={styles.benefits__list}>
          {saltCaveBenefits.map((benefit) => (
            <article className={styles.benefits__item} key={benefit.icon.alt}>
              <Image
                className={styles.benefits__icon}
                src={benefit.icon.file}
                alt={benefit.icon.alt}
              />
              <h3 className={styles.benefits__title}>{benefit.title}</h3>
              <p className={styles.benefits__text}>{benefit.text}</p>
            </article>
          ))}
        </div>
      </SectionLayout>
    </section>
  );
}

export default SaltCaveBenefits;

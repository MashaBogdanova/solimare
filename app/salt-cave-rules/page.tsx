import React from 'react';
import saltCaveRules from '../../configs/salt-cave-rules.config';
import SectionLayout from '../../components/layout/section-layout/SectionLayout';
import styles from './_salt-cave-rules.module.scss';

function SaltCaveRules() {
  return (
    <SectionLayout>
      <div className={styles.rules}>
        <h1>{saltCaveRules.title}</h1>
        <p>{saltCaveRules.introduction}</p>
        <ol>
          {saltCaveRules.rules.map((rule) => (
            <li key={rule} className={styles.rules__rule}>
              {rule}
              {rule.includes('Chociaż haloterapia jest zalecana') && (
                <>
                  <ul>
                    {saltCaveRules.illnesses.map((illness) => (
                      <li key={illness} className={styles.rules__rule}>
                        {illness}
                      </li>
                    ))}
                  </ul>
                  <p>{saltCaveRules.illnessesAddition}</p>
                </>
              )}
            </li>
          ))}
        </ol>
        <p>{saltCaveRules.parentsBlockTitle}</p>
        <p>{saltCaveRules.parentsBlockText}</p>
      </div>
    </SectionLayout>
  );
}

export default SaltCaveRules;

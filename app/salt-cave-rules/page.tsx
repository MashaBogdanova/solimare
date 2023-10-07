import React from 'react';
import PageLayout from '../../components/layout/page-layout/PageLayout';
import saltCaveRules from '../../configs/salt-cave-rules.config';
import styles from './_salt-cave-rules.module.scss';

function SaltCaveRules() {
  return (
    <PageLayout>
      <div className={styles.rules}>
        <h1>{saltCaveRules.title}</h1>
        <p>{saltCaveRules.introduction}</p>
        <ol>
          {saltCaveRules.rules.map((rule) => (
            <li key={rule} className={styles.rules__rule}>
              {rule}
              {rule.includes('Chociaż haloterapia jest zalecana') && (
                <div>
                  <ul>
                    {saltCaveRules.illnesses.map((illness) => (
                      <li key={illness} className={styles.rules__rule}>
                        {illness}
                      </li>
                    ))}
                  </ul>
                  <p>{saltCaveRules.illnessesAddition}</p>
                </div>
              )}
            </li>
          ))}
        </ol>
        <p>{saltCaveRules.parentsBlockTitle}</p>
        <p>{saltCaveRules.parentsBlockText}</p>
      </div>
    </PageLayout>
  );
}

export default SaltCaveRules;

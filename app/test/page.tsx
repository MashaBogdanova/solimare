import React from 'react';
import styles from './_test.module.scss';

function Test() {
  return (
    <div className={styles.parallax}>
      <div className={`${styles.parallaxLayer} ${styles.layer1}`}>LAYER 1</div>
      <div className={`${styles.parallaxLayer} ${styles.layer2}`}>LAYER 2</div>
      <div className={`${styles.parallaxLayer} ${styles.layer3}`}>LAYER 3</div>
    </div>
  );
}

export default Test;

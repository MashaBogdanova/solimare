import React from 'react';
import Image from 'next/image';
import photo from '../../assets/yoga.jpg';
import styles from './_yoga.module.scss';

function Yoga() {
  return (
    <section className={styles.yoga}>
      <div className={styles.text}>
        <h1 className={styles.title}>Joga w grocie solnej</h1>
        <p>
          Joga w grocie solnej to doskonałe połączenie ćwiczeń jogi ze
          zdrowotnymi właściwościami soli. Grota solna to miejsce, w którym
          można wypocząć i złagodzić objawy alergii, astmy czy przeziębienia.
          Ćwiczenia jogi w takim otoczeniu pomagają dodatkowo zredukować stres i
          poprawić samopoczucie. Dzięki temu, joga w grocie solnej jest idealnym
          sposobem na poprawę zdrowia fizycznego i psychicznego.
        </p>
      </div>
      <Image src={photo} className={styles.photo} />
    </section>
  );
}

export default Yoga;

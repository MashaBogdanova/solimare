import React from 'react';
import Image from 'next/image';
import photo from '../../assets/grota-solna.jpg';
import styles from './_saltCave.module.scss';
import PageLayout from '../../components/layout/layout-width/PageLayout';

function SaltCave() {
  return (
    <PageLayout>
      <section className={styles.saltCave}>
        <Image
          src={photo}
          className={styles.saltCave__picture}
          alt="salt cave"
        />
        <div className={styles.saltCave__text}>
          <h1 className={styles.saltCave__title}>Grota Solna</h1>
          <p className={styles.saltCave__paragraph}>
            Grota solna to pomieszczenie wypełnione solą, które ma na celu
            poprawienie zdrowia i samopoczucia ludzi. Oczyszcza ona drogi
            oddechowe, a także działa kojąco na skórę. Groty solne są
            szczególnie polecane osobom cierpiącym na choroby układu
            oddechowego, takie jak astma czy kaszel. Sól zawarta w grocie jest
            bogata w mikroelementy, które korzystnie wpływają na organizm. Grota
            solna może być stosowana w celach terapeutycznych, a także jako
            sposób na relaks i odprężenie.
          </p>
          <p className={styles.saltCave__paragraph}>
            Jeśli chcesz zadbać o swoje zdrowie w sposób naturalny i bezpieczny
            dla organizmu, grota solna to doskonały wybór. W takim pomieszczeniu
            możesz nie tylko poprawić swoje zdrowie, ale także wypocząć i
            zrelaksować się po ciężkim dniu. Mgiełka solankowa którą można
            zobaczyć poniżej na filmiku jest dodatkowo rozpylana, ona zwiększa
            koncentrację mikrocząstek i jest bardziej skoncentrowaną formą
            terapii solnej.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

export default SaltCave;

import React from 'react';
import Image from "next/image";
import photo from '../../../assets/grota-solna.jpg';
import styles from './_saltCave.module.scss';

function SaltCave() {
    return (
        <section className={styles.saltCave}>
            <Image src={photo} className={styles.photo}/>
            <div className={styles.text}>
                <h1 className={styles.title}>Grota Solna</h1>
                <p className={styles.paragraph}>
                    Grota solna to pomieszczenie wypełnione solą, które ma na celu poprawienie zdrowia i samopoczucia
                    ludzi. Oczyszcza ona drogi oddechowe, a także działa kojąco na skórę. Groty solne są szczególnie
                    polecane osobom cierpiącym na choroby układu oddechowego, takie jak astma czy kaszel. Sól zawarta w
                    grocie jest bogata w mikroelementy, które korzystnie wpływają na organizm. Grota solna może być
                    stosowana w celach terapeutycznych, a także jako sposób na relaks i odprężenie.
                </p>
                <p className={styles.paragraph}>
                    Jeśli chcesz zadbać o swoje zdrowie w sposób naturalny i bezpieczny dla organizmu, grota solna to
                    doskonały wybór. W takim pomieszczeniu możesz nie tylko poprawić swoje zdrowie, ale także wypocząć i
                    zrelaksować się po ciężkim dniu. Mgiełka solankowa którą można zobaczyć poniżej na filmiku jest
                    dodatkowo rozpylana, ona zwiększa koncentrację mikrocząstek i jest bardziej skoncentrowaną formą
                    terapii solnej.
                </p>
            </div>
        </section>
    );
}

export default SaltCave;

import React from 'react';
import Image from "next/image";
import photo from '../../../assets/inhalation.jpg';
import styles from './_inhalation.module.scss';

function Inhalation() {
    return (
        <section className={styles.inhalation}>
            <Image src={photo} className={styles.photo}/>
            <div className={styles.text}>
                <h1 className={styles.title}>Inhalacje wodorem molekularnym</h1>
                <p>
                    Inhalacje wodorem molekularnym mają wiele korzyści dla zdrowia. Wodór molekularny działa jako silny
                    przeciwutleniacz, redukując stres oksydacyjny w organizmie. Inhalacje wodorem mogą pomóc w
                    łagodzeniu bólu, redukowaniu stanów zapalnych, poprawie funkcjonowania układu krążenia oraz
                    zwiększeniu poziomu energii. Wodór molekularny jest także bezpieczny w użyciu i nie powoduje skutków
                    ubocznych.
                </p>
            </div>
        </section>
    );
}

export default Inhalation;

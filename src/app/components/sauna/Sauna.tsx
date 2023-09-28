import React from 'react';
import Image from 'next/image';
import photo from '../../../assets/sauna.jpg';
import styles from './_sauna.module.scss';

function Sauna() {
  return (
    <section className={styles.sauna}>
      <div className={styles.text}>
        <h1 className={styles.title}>Sauna infrared</h1>
        <p>
          Sauna infrared to innowacyjne rozwiązanie, które zyskuje na
          popularności ze względu na swoje korzystne działanie na zdrowie. W
          przeciwieństwie do tradycyjnych saun, sauna infrared działa na
          zasadzie generowania ciepła przez promieniowanie podczerwone, a nie
          przez ogrzewanie powietrza. Dzięki temu temperatura w saunie jest
          niższa, ale odczuwamy takie samo ciepło.
        </p>
        <p>
          Korzystanie z sauny infrared przynosi wiele korzyści dla naszego
          organizmu. Sauny te poprawiają krążenie, redukują ból, zmniejszają
          stres i poprawiają wygląd skóry. Dzięki temu są szczególnie polecane
          dla osób zmagających się z bólami mięśni i stawów, a także dla osób,
          które chcą poprawić kondycję swojej skóry.
        </p>
        <p>
          Należy jednak pamiętać, że sauna infrared nie jest odpowiednia dla
          każdego. Osoby z problemami zdrowotnymi, takimi jak choroby serca,
          nadciśnienie czy cukrzyca, powinny skonsultować się z lekarzem przed
          skorzystaniem z sauny infrared. We wszystkich przypadkach, przed
          rozpoczęciem korzystania z sauny, należy dokładnie zapoznać się z
          zasadami bezpieczeństwa i przestrzegać ich podczas korzystania z sauny
          infrared.
        </p>
      </div>
      <Image src={photo} className={styles.photo} />
    </section>
  );
}

export default Sauna;

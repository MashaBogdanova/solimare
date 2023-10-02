import React from 'react';
import { Card } from 'antd';
import prices from '../../configs/price.config';
import styles from './_price.module.scss';

function Price() {
  return (
    <section className={styles.price}>
      {prices.map((price) => {
        return (
          <Card
            title={price.label}
            bordered={false}
            className={styles.priceCard}
            key={price.label}
          >
            <>
              <h4>Session time</h4>
              <p>{price.sessionTime}</p>
            </>
            <>
              <h4>Bilet normalny</h4>
              <p>{price.biletNormalny}</p>
            </>
            <>
              <h4>Karnet</h4>
              <p>{price.karnetNormalny}</p>
            </>
            {price.biletUlgowy && (
              <>
                <>
                  <h4>Bilet ulgowy</h4>
                  <p>{price.biletUlgowy}</p>
                </>
                <>
                  <h4>Karnet ulgowy</h4>
                  <p>{price.karnetUlgowy}</p>
                </>
              </>
            )}
            {price.biletPlus && (
              <>
                <>
                  <h4>Session time</h4>
                  <p>{price.sessionTimePlus}</p>
                </>
                <>
                  <h4>Bilet</h4>
                  <p>{price.biletPlus}</p>
                </>
                <>
                  <h4>Karnet</h4>
                  <p>{price.karnetPlus}</p>
                </>
              </>
            )}
            {price.kartaMultiSport && (
              <>
                <h4>Z kartą MultiSport</h4>
                <p>{price.kartaMultiSport}</p>
              </>
            )}
            {price.kartaMedicover && (
              <>
                <h4>Z kartą Medicower (pakiet podstawowy)</h4>
                <p>{price.kartaMedicover}</p>
              </>
            )}
            {price.kartaPZU && (
              <>
                <h4>Z kartą PZU Sport (30 min)</h4>
                <p>{price.kartaPZU}</p>
              </>
            )}
            <p>{price.addition}</p>
          </Card>
        );
      })}
    </section>
  );
}

export default Price;

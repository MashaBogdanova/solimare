import React from 'react';
import Image from 'next/image';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import prices, { IPrice } from '../../configs/price.config';
import card1 from '../../assets/price/multisport.png';
import card2 from '../../assets/price/medicover.png';
import card3 from '../../assets/price/fit-profit.png';
import card4 from '../../assets/price/pzu.png';
import styles from './_price.module.scss';

function Price() {
  const cards = [card1, card2, card3, card4];

  const columns: ColumnsType<IPrice> = [
    {
      title: '',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Wejścia pojedyncze',
      dataIndex: 'bilet',
      key: 'bilet',
    },
    {
      title: 'Karnet*',
      dataIndex: 'karnet',
      key: 'karnet',
    },
  ];

  return (
    <section className={styles.price}>
      {prices.map((price) => {
        return (
          <div className={styles.price__section}>
            <h2 style={{ marginBottom: 10 }}>{price.label}</h2>
            <Table
              columns={columns}
              dataSource={price.tickets}
              pagination={false}
            />
            <p className={styles.price__addition}>{price.addition}</p>
          </div>
        );
      })}
      <div className={styles.price__partners}>
        <h4>Akceptujemy karty</h4>
        <div className={styles.price__partnersCards}>
          {cards.map((card) => (
            <Image src={card} height={40} alt="card" key={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Price;

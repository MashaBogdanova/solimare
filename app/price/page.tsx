'use client';

import React from 'react';
import Image from 'next/image';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import prices, { IPrice } from '../../configs/price.config';
import card1 from '../../public/price/multisport.png';
import card2 from '../../public/price/medicover.png';
import card3 from '../../public/price/fit-profit.png';
import card4 from '../../public/price/pzu.png';
import styles from './_price.module.scss';
import PageLayout from '../../components/layout/page-layout/PageLayout';

function Price() {
  const cards = [card1, card2, card3, card4];

  const columns: ColumnsType<IPrice> = [
    {
      title: '',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Wejście jednorazowe',
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
    <PageLayout>
      <div className={styles.price}>
        {prices.map((price) => {
          return (
            <div className={styles.price__block} key={price.key}>
              <h2 className={styles.price__subtitle}>{price.label}</h2>
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
              <Image src={card} height={40} alt="card" key={card.src} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Price;

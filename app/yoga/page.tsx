import React from 'react';
import { Metadata } from 'next';
import pagesInfo from '../../configs/pages.config';
import InfoPage from '../../components/layout/info-page/InfoPage';

export const metadata: Metadata = {
  title: 'Yoga',
  description: 'Yoga w Grocie Solney Warszawa',
};

function Yoga() {
  return <InfoPage pageInfo={pagesInfo.yoga} />;
}

export default Yoga;

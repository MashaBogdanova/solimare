import React from 'react';
import pagesInfo from '../../configs/pages.config';
import InfoPage from '../../components/layout/info-page/InfoPage';

function Inhalation() {
  return <InfoPage pageInfo={pagesInfo.inhalation} />;
}

export default Inhalation;

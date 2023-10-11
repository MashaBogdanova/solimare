import React from 'react';
import pagesInfo from '../../configs/pages.config';
import InfoPage from '../../utils/InfoPage';

function Sauna() {
  return <InfoPage pageInfo={pagesInfo.saunaInfrared} />;
}

export default Sauna;

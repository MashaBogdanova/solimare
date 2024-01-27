import { StaticImageData } from 'next/image';
import health from '../public/benefits/health.svg';
import meditation from '../public/benefits/meditation.svg';
import lungs from '../public/benefits/lungs.svg';

export interface Benefit {
  title: string;
  text: string;
  icon: {
    file: StaticImageData;
    alt: string;
  };
}

const saltCaveBenefits: Benefit[] = [
  {
    title: 'LECZENIE CHORÓB',
    text: 'Inhalacja solanki to ulga dla dróg oddechowych przy astmie, alergiach i zapaleniu zatok',
    icon: {
      file: health,
      alt: 'zdrowie',
    },
  },
  {
    title: 'OCZYSZCZENIE DRÓG ODDECHOWYCH',
    text: 'Solankowy mikroklimat pomaga w oczyszczeniu dróg oddechowych, poprawiając ich funkcję',
    icon: {
      file: lungs,
      alt: 'drogi oddechowe',
    },
  },
  {
    title: 'ULGA OD STRESU',
    text: 'Grota Solna działa łagodząco na stres i poprawia ogólną kondycję psychiczną',
    icon: {
      file: meditation,
      alt: 'medytacja',
    },
  },
];

export default saltCaveBenefits;

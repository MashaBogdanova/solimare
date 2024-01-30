import { StaticImageData } from 'next/image';
import multisport from '../public/partners/multisport.svg';
import medicover from '../public/partners/medicover.svg';
import fitProfit from '../public/partners/fit-profit.png';
import pzu from '../public/partners/pzu.png';

interface TicketOptions {
  title: string;
  subtitle?: string;
  bilet: string;
  karnet?: string;
}

export interface Price {
  label: string;
  tickets: TicketOptions[];
  addition: string;
}

interface Partners {
  name: string;
  link: string;
  image: StaticImageData;
}

export const prices: Price[] = [
  {
    label: 'Grota Solna (45 min)',
    tickets: [
      {
        title: 'Bilet normalny ',
        bilet: '30 zł',
        karnet: '270 zł',
      },
      {
        title: 'Bilet ulgowy ',
        bilet: '22 zł',
        karnet: '198 zł',
      },
    ],
    addition: 'Karnet 10 wejść, jest ważny 2 miesiące',
  },
  {
    label: 'Sauna Infrared (30 min)',
    tickets: [
      {
        title: 'Bilet normalny / ulgowy',
        bilet: '35 zł',
        karnet: '315 zł',
      },
      {
        title: 'Z kartą MultiSport ',
        bilet: 'dopłata 6 zł',
      },
      {
        title: 'Z kartą Medicower ',
        subtitle: '(pakiet podstawowy)',
        bilet: 'dopłata 5 zł',
      },
    ],
    addition: 'Karnet 10 wejść, jest ważny 2 miesiące',
  },
  {
    label: 'Inhalacje wodorem molekularnym',
    tickets: [
      {
        title: 'Sesja 30 min ',
        bilet: '60 zł',
        karnet: '500 zł',
      },
      {
        title: 'Sesja 50 min ',
        bilet: '80 zł',
        karnet: '700 zł',
      },
      {
        title: 'Z kartą PZU Sport',
        subtitle: '(30 min)',
        bilet: 'dopłata 30zł',
      },
    ],
    addition: 'Karnet 10 wejść, jest ważny 2 miesiące',
  },
  {
    label: 'Joga (60 min)',
    tickets: [
      {
        title: 'Jednorazowe wejście',
        bilet: '60 zł',
        karnet: '200 zł',
      },
    ],
    addition: 'Karnet 4 wejścia, jest ważny 1 miesiąc',
  },
];

export const partners: Partners[] = [
  {
    name: 'Multisport',
    link: 'https://www.kartamultisport.pl',
    image: multisport,
  },
  {
    name: 'Medicover',
    link: 'https://medicoversport.pl',
    image: medicover,
  },
  {
    name: 'Fit Profit',
    link: 'https://www.vanitystyle.pl/programy/programy-sportowe',
    image: fitProfit,
  },
  {
    name: 'PZU',
    link: 'https://sport.pzu.pl/firma',
    image: pzu,
  },
];

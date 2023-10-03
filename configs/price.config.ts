interface ITicketOptions {
  key: string;
  title: string;
  bilet: string;
  karnet: string;
}

export interface IPrice {
  label: string;
  sessionTime?: string;
  tickets: ITicketOptions[];
  sessionTimePlus?: string;
  biletPlus?: string;
  karnetPlus?: string;
  kartaMultiSport?: string;
  kartaMedicover?: string;
  kartaPZU?: string;
  addition: string;
}

const prices: IPrice[] = [
  {
    label: 'Grota Solna (Sesja trwa 45 min)',
    tickets: [
      {
        key: '1',
        title: 'Bilet normalny',
        bilet: '30 zł',
        karnet: '270 zł',
      },
      {
        key: '2',
        title: 'Bilet ulgowy',
        bilet: '22 zł',
        karnet: '198 zł',
      },
    ],
    addition: '*Karnet 10 wejść, jest ważny 2 miesiące',
  },
  {
    label: 'Sauna Infrared (Sesja trwa 30 min)',
    tickets: [
      {
        key: '3',
        title: 'Bilet ulgowy/ normalny',
        bilet: '35 zł',
        karnet: '315 zł',
      },
      {
        key: '4',
        title: 'Z kartą MultiSport',
        bilet: 'dopłata 6 zł',
        karnet: '',
      },
      {
        key: '5',
        title: `Z kartą Medicower (pakiet podstawowy)`,
        bilet: 'dopłata 5 zł',
        karnet: '',
      },
    ],
    addition: '*Karnet 10 wejść, jest ważny 2 miesiące',
  },
  {
    label: 'Inhalacje wodorem molekularnym',
    tickets: [
      {
        key: '4',
        title: 'Sesja 30 min',
        bilet: '60 zł',
        karnet: '500 zł',
      },
      {
        key: '5',
        title: 'Sesja 50 min',
        bilet: '80 zł',
        karnet: '700 zł',
      },
      {
        key: '5',
        title: 'Z kartą PZU Sport (30 min)',
        bilet: 'dopłata 30zł',
        karnet: '',
      },
    ],
    addition: '*Karnet 10 wejść, jest ważny 2 miesiące',
  },
  {
    label: 'Joga',
    sessionTime: '60 min',
    tickets: [
      {
        key: '1',
        title: 'Jednorazowe wejście na zajęcia',
        bilet: '60 zł',
        karnet: 'Karnet 200 zł',
      },
    ],
    addition: '*Karnet  obejmuje 4 wejścia po 50 zł, jest ważny 1 miesiąc',
  },
];
export default prices;

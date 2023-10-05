interface ITicketOptions {
  key: string;
  title: string;
  bilet: string;
  karnet: string;
}

export interface IPrice {
  key: string;
  label: string;
  tickets: ITicketOptions[];
  addition: string;
}

const prices: IPrice[] = [
  {
    key: '1',
    label: 'Grota Solna (Sesja trwa 45 min)',
    tickets: [
      {
        key: '1.1',
        title: 'Bilet normalny',
        bilet: '30 zł',
        karnet: '270 zł',
      },
      {
        key: '1.2',
        title: 'Bilet ulgowy',
        bilet: '22 zł',
        karnet: '198 zł',
      },
    ],
    addition: '*Karnet 10 wejść, jest ważny 2 miesiące',
  },
  {
    key: '2',
    label: 'Sauna Infrared (Sesja trwa 30 min)',
    tickets: [
      {
        key: '2.1',
        title: 'Bilet ulgowy / normalny',
        bilet: '35 zł',
        karnet: '315 zł',
      },
      {
        key: '2.2',
        title: 'Z kartą MultiSport',
        bilet: 'dopłata 6 zł',
        karnet: '-',
      },
      {
        key: '2.3',
        title: `Z kartą Medicower (pakiet podstawowy)`,
        bilet: 'dopłata 5 zł',
        karnet: '-',
      },
    ],
    addition: '*Karnet 10 wejść, jest ważny 2 miesiące',
  },
  {
    key: '3',
    label: 'Inhalacje wodorem molekularnym',
    tickets: [
      {
        key: '3.1',
        title: 'Sesja 30 min',
        bilet: '60 zł',
        karnet: '500 zł',
      },
      {
        key: '3.2',
        title: 'Sesja 50 min',
        bilet: '80 zł',
        karnet: '700 zł',
      },
      {
        key: '3.3',
        title: 'Z kartą PZU Sport (30 min)',
        bilet: 'dopłata 30zł',
        karnet: '-',
      },
    ],
    addition: '*Karnet 10 wejść, jest ważny 2 miesiące',
  },
  {
    key: '4',
    label: 'Joga',
    tickets: [
      {
        key: '4.1',
        title: 'Jednorazowe wejście na zajęcia',
        bilet: '60 zł',
        karnet: '200 zł',
      },
    ],
    addition: '*Karnet  obejmuje 4 wejścia po 50 zł, jest ważny 1 miesiąc',
  },
];
export default prices;

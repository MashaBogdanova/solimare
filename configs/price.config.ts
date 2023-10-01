interface IPrice {
  label: string;
  sessionTime: string;
  biletNormalny: string;
  karnetNormalny: string;
  biletUlgowy?: string;
  karnetUlgowy?: string;
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
    label: 'Grota Solna',
    sessionTime: '45 min',
    biletNormalny: '30 zł',
    karnetNormalny: '270 zł',
    biletUlgowy: '22 zł',
    karnetUlgowy: '198 zł',
    addition: '*Karnet 10 wejść, jest ważny 2 miesiące',
  },
  {
    label: 'Sauna Infrared',
    sessionTime: '30 min',
    biletNormalny: '35 zł',
    karnetNormalny: '315 zł',
    kartaMultiSport: 'Dodatkowa opłata za 1 sesję - 6 zł',
    kartaMedicover: 'Dodatkowa opłata za 1 sesję - 5 zł',
    addition: '*Karnet 10 wejść, jest ważny 2 miesiące',
  },
  {
    label: 'Inhalacje wodorem molekularnym',
    sessionTime: '30 min',
    biletNormalny: '60 zł',
    karnetNormalny: '500 zł',
    sessionTimePlus: '50min',
    biletPlus: '80 zł',
    karnetPlus: '700 zł',
    kartaPZU: 'Dodatkowa opłata za 1 sesję - 30 zł',
    addition: '*Karnet 10 wejść, jest ważny 2 miesiące',
  },
  {
    label: 'Joga',
    sessionTime: '60 min',
    biletNormalny: '60 zł',
    karnetNormalny: '200 zł',
    addition: '*Karnet 4 wejścia, jest ważny 1 miesiąc',
  },
];

export default prices;

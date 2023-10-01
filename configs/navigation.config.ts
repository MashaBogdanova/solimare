interface IItem {
  label: string;
  key: string;
  children?: IItem[];
}

const navItems: IItem[] = [
  {
    label: 'Grota solna',
    key: 'salt-cave',
    children: [
      {
        label: 'O Grocie',
        key: 'salt-cave',
      },
      {
        label: 'Seansy dla dorosłych',
        key: 'adults-sessions',
      },
      {
        label: 'Seansy dla dzieci',
        key: 'children-sessions',
      },
      {
        label: 'Grota na wyłączność',
        key: 'cave-rent',
      },
      {
        label: 'Regulamin',
        key: 'cave-rules',
      },
    ],
  },
  {
    label: 'Sauna infrared',
    key: 'sauna',
    children: [
      {
        label: 'O Saunie',
        key: 'sauna',
      },
      {
        label: 'Regulamin',
        key: 'sauna-rules',
      },
    ],
  },
  { label: 'Inhalacje wodorem molekularnym', key: 'inhalation' },
  { label: 'Joga', key: 'yoga' },
  { label: 'Cennik', key: 'price' },
  { label: 'Kontakt', key: 'contacts' },
  { label: 'Często zadawane pytanie', key: 'faq' },
];

export default navItems;

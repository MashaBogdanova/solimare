interface IItem {
  label: string;
  key: string;
}

const navItems: IItem[] = [
  { label: 'Grota solna', key: 'grota-solna' },
  { label: 'Sauna infrared', key: 'sauna-infrared' },
  { label: 'Inhalacje wodorem molekularnym', key: 'inhalacje-wodorem' },
  { label: 'Joga', key: 'joga' },
  { label: 'Kontakt', key: 'kontakt' },
  { label: 'Cennik', key: 'cennik' },
];

export default navItems;

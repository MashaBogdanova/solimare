import React from 'react';
import { Menu, MenuProps } from 'antd';
import styles from './_nav.module.scss';

interface IProps {
  isSideMenu: boolean;
}

function Nav({ isSideMenu }: IProps) {
  const items: MenuProps['items'] = [
    {
      label: 'Grota solna',
      key: 'cave',
      children: [
        {
          label: 'O Grocie',
          key: 'cave-info',
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
          key: 'sauna-info',
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

  return (
    <Menu
      mode={isSideMenu ? 'inline' : 'horizontal'}
      items={[...items]}
      className={isSideMenu ? styles.sideMenuNav : styles.nav}
    />
  );
}

export default Nav;

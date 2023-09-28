import React from 'react';
import { Menu, MenuProps } from 'antd';
import styles from './_nav.module.scss';

interface IProps {
  isSideMenu: boolean;
}

function Nav({ isSideMenu }: IProps) {
  const popoverStyle = {
    backgroundColor: 'rgb(0, 0, 0, 0.9)',
    margin: 0,
    width: '100%',
    borderRadius: 0,
  };
  const items: MenuProps['items'] = [
    {
      label: 'Grota solna',
      key: 'cave',
      children: [
        {
          label: 'O Grocie',
          key: 'cave-info',
          style: !isSideMenu && popoverStyle,
        },
        {
          label: 'Seansy dla dorosłych',
          key: 'adults-sessions',
          style: !isSideMenu && popoverStyle,
        },
        {
          label: 'Seansy dla dzieci',
          key: 'children-sessions',
          style: !isSideMenu && popoverStyle,
        },
        {
          label: 'Grota na wyłączność',
          key: 'cave-rent',
          style: !isSideMenu && popoverStyle,
        },
        {
          label: 'Regulamin',
          key: 'cave-rules',
          style: !isSideMenu && popoverStyle,
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
          style: !isSideMenu && popoverStyle,
        },
        {
          label: 'Regulamin',
          key: 'sauna-rules',
          style: !isSideMenu && popoverStyle,
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

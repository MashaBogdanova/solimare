import React from 'react';
import Image from 'next/image';
import {FacebookOutlined, InstagramOutlined} from "@ant-design/icons";
import styles from './header.module.css';
import booksyIcon from '../../../assets/booksy-icon.svg';
import logo from "@/assets/logo-white.png";


function Header() {
    const navItems = ['Grota Solna', 'Sauna infrared', 'Inhalacje wodorem molekularnym', 'Joga', 'Cennik', 'Często zadawane pytanie', 'Kontakt'];
    return (
        <header>
            <Image src={logo} width={220} className={styles.logo} alt="logo"/>

            <div className={styles.navIconsWrapper}>
                <Image src={booksyIcon} className={styles.booksyIcon} alt="booksy"/>
                <InstagramOutlined/>
                <FacebookOutlined/>
            </div>

            <nav className={styles.nav}>
                {navItems.map(item => <p key={item}>{item}</p>)}
            </nav>
        </header>
    );
}

export default Header;

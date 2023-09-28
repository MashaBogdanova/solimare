import React from 'react';
import Image from 'next/image';
import styles from './_header.module.scss';
import logo from "@/assets/logo-white.png";
import SocialMedia from "@/app/components/header/socialMedia/SocialMedia";


function Header() {
    const navItems = ['Grota Solna', 'Sauna infrared', 'Inhalacje wodorem molekularnym', 'Joga', 'Cennik', 'Kontakt', 'Regulamin', 'Często zadawane pytanie'];
    return (
        <header>
            <Image src={logo} width={220} className={styles.logo} alt="logo"/>
            <SocialMedia/>
            <nav className={styles.nav}>
                {navItems.map(item => <p key={item}>{item}</p>)}
            </nav>
        </header>
    );
}

export default Header;

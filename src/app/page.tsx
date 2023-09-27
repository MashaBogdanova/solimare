import React from 'react';
import styles from './page.module.css';
import MainCarousel from "@/app/components/MainCarousel";
import Header from "@/app/components/header/Header";


export default function Home() {
    return (
        <main className={styles.main}>
            <Header/>
            <MainCarousel/>
        </main>
    )
}

import React from 'react';
import styles from './_page.module.scss';
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

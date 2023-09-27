import React from 'react';
import styles from './_page.module.scss';
import MainCarousel from "@/app/components/MainCarousel";
import Header from "@/app/components/header/Header";
import GrotaSolna from "@/app/components/grotaSolna/GrotaSolna";
import Sauna from "@/app/components/sauna/Sauna";


export default function Home() {
    return (
        <main className={styles.main}>
            <Header/>
            <MainCarousel/>
            <GrotaSolna />
            <Sauna />
        </main>
    )
}

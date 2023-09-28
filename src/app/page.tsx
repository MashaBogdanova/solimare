import React from 'react';
import styles from './_page.module.scss';
import MainCarousel from "@/app/components/MainCarousel";
import Header from "@/app/components/header/Header";
import SaltCave from "@/app/components/saltCave/SaltCave";
import Sauna from "@/app/components/sauna/Sauna";
import Inhalation from "@/app/components/inhalation/Inhalation";
import Yoga from "@/app/components/yoga/Yoga";
import Footer from "@/app/components/footer/Footer";


export default function Home() {
    return (
        <main className={styles.main}>
            <Header/>
            <MainCarousel/>
            <SaltCave />
            <Sauna />
            <Inhalation />
            <Yoga/>
            <Footer/>
        </main>
    )
}

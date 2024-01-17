import React from 'react';
import type { Metadata } from 'next';
import { Mulish, Philosopher } from 'next/font/google';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import './globals.scss';

const titleFont = Philosopher({
  weight: '400',
  subsets: ['latin'],
  variable: '--title-font',
});

const textFont = Mulish({
  weight: '400',
  subsets: ['latin'],
  variable: '--text-font',
});

export const metadata: Metadata = {
  title: 'Solimare',
  description: 'Grota Solna & Sauna Infrared Warszawa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${textFont.variable} ${titleFont.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

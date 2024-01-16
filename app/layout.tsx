import React from 'react';
import type { Metadata } from 'next';
import { DM_Serif_Display, Lato } from 'next/font/google';
import { ConfigProvider } from 'antd';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import antdStyles from './antdStyles';
import './globals.scss';

const titleFont = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--title-font',
});

const textFont = Lato({
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
      <ConfigProvider theme={antdStyles}>
        <body className={`${textFont.variable} ${titleFont.variable}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </ConfigProvider>
    </html>
  );
}

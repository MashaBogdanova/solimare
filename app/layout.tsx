import React from 'react';
import type { Metadata } from 'next';
import { Radley, Arimo } from 'next/font/google';
import { ConfigProvider } from 'antd';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import antdStyles from './antdStyles';
import './globals.scss';

export const titleFont = Radley({
  weight: '400',
  subsets: ['latin'],
  variable: '--title-font',
});

export const textFont = Arimo({
  weight: '400',
  subsets: ['latin'],
  variable: '--text-font',
});

export const metadata: Metadata = {
  title: 'Grota Solna',
  description: 'Grota Solna Warszawa',
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

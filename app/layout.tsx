import React from 'react';
import './globals.scss';
import type { Metadata } from 'next';
import { Radley, Arimo } from 'next/font/google';

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
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${textFont.variable} ${titleFont.variable}`}>
        {children}
      </body>
    </html>
  );
}

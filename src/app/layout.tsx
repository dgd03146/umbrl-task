import '@/styles/globals.css';

import Footer from './_components/Footer';
import Header from './_components/Header';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import localFont from '@next/font/local';

const gilroy = localFont({
  src: [{ path: './fonts/Gilroy.otf' }],
  display: 'swap',
  variable: '--font-gilroy',
});

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  title: 'Brainwave',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroy.className} ${gilroy.variable} ${rubik.variable}`}
      >
        <div className="h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <section className="max-w-[1110px] mx-auto">{children}</section>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

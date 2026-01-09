import type { Metadata } from 'next';
import { Geist, Roboto } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const roboto = Roboto({
  variable: '--font-sans',
  display: 'auto',
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aquatopia',
  description: 'Advanced Solutions in Aquatic Engineering',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  params: Promise<{ lang: 'en-US' | 'de' }>;
  children: React.ReactNode;
}>) {
  return (
    <html lang={(await params).lang}>
      <LanguageProvider>
        <body
          className={`${roboto.className} ${geistSans.variable} antialiased`}
        >
          {children}
        </body>
      </LanguageProvider>
    </html>
  );
}

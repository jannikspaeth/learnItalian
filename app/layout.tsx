import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Italienisch',
  description: 'Italian vocabulary and verb conjugation practice for German speakers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full">
        <Navigation />
        {children}
      </body>
    </html>
  );
}

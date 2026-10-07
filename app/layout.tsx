import type { Metadata, Viewport } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import OfflineSupport from '@/components/OfflineSupport';

const body = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const serif = Fraunces({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = {
  title: 'Sprachen lernen',
  description: 'Italian, Spanish and French vocabulary, verbs and grammar for German speakers',
  // Installed on an iPhone home screen: full screen, own name under the icon.
  appleWebApp: { capable: true, title: 'Sprachen', statusBarStyle: 'default' },
};

export const viewport: Viewport = {
  themeColor: '#FBF6EE',
  viewportFit: 'cover', // lets env(safe-area-inset-*) report the notch / home bar
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`h-full ${body.variable} ${serif.variable}`}>
      <body className="min-h-full">
        <Navigation />
        <OfflineSupport />
        {children}
      </body>
    </html>
  );
}

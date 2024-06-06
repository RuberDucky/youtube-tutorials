import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// App.tsx
import 'react-day-picker/dist/style.css';
import '../styles/globals.css';

import ContextProvider from '@/components/context-provider';

import { PeopleProvider } from './people-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'Create Next App', template: '%s | Create Next App' },
  description: 'Generated by create next app',
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ContextProvider>
          <PeopleProvider>
            <main className="min-h-screen flex flex-col items-center px-4">
              <div className="flex-1 w-full flex flex-col gap-12 items-center">
                {children}
              </div>
            </main>
          </PeopleProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
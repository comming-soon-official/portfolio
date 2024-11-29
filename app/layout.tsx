import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { Meteors } from '@/components/magicui/meteors';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Portfolio',
  description: 'Your Portfolio Description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Meteors number={20} className="opacity-[0.15] dark:opacity-[0.25]" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { Meteors } from '@/components/magicui/meteors';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Himal - Full Stack Developer | React, Node.js, AI/ML Integration',
  description:
    'Himal is a passionate Full Stack Developer with 4+ years of experience in React, Node.js, and AI/ML integration. Building innovative solutions for startups and enterprises.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'AI/ML Integration',
    'BigBlueButton',
    'JavaScript',
    'TypeScript',
    'Python',
    'AWS',
    'DevOps',
    'Software Engineer',
    'Himal',
    'Portfolio',
    'Web Development',
    'Mobile App Development',
    'React Native',
    'Next.js',
  ],
  authors: [{ name: 'Himal' }],
  creator: 'Himal',
  publisher: 'Himal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://heyhimal.me',
    title: 'Himal - Full Stack Developer | React, Node.js, AI/ML Integration',
    description:
      'Passionate Full Stack Developer with 4+ years of experience building innovative solutions. Specialized in React, Node.js, and AI/ML integration.',
    siteName: 'Himal Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Himal - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himal - Full Stack Developer | React, Node.js, AI/ML Integration',
    description:
      'Passionate Full Stack Developer with 4+ years of experience building innovative solutions.',
    creator: '@commingsoon9626',
    images: ['/images/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://himal-portfolio.vercel.app',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Himal',
  jobTitle: 'Full Stack Developer',
  description:
    'Passionate Full Stack Developer with 4+ years of experience in React, Node.js, and AI/ML integration.',
  url: 'https://himal-portfolio.vercel.app',
  email: 'himal9626@gmail.com',
  sameAs: [
    'https://github.com/comming-soon-official',
    'https://www.linkedin.com/in/himal-b-180b701a5/',
    'https://x.com/commingsoon9626',
    'https://www.instagram.com/himal_official/',
  ],
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'AI/ML Integration',
    'AWS',
    'DevOps',
    'BigBlueButton',
    'Next.js',
    'React Native',
  ],
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Octacomm',
      url: 'https://octacomm.com',
    },
    {
      '@type': 'Organization',
      name: 'TESTAING',
      url: 'https://testaing.com',
    },
    {
      '@type': 'Organization',
      name: 'Cyberkrypts',
      url: 'https://cyberkrypts.dev',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://himal-portfolio.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/portfolio.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/portfolio.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/portfolio.png" />
        <link rel="shortcut icon" href="/portfolio.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Meteors number={20} className="opacity-[0.15] dark:opacity-[0.25]" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

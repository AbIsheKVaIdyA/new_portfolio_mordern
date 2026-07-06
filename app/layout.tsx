import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import { AppViewModeProvider } from '@/components/ViewModeProvider'
import { PersonJsonLd } from '@/components/seo/PersonJsonLd'
import { profile } from '@/data/profile'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.abhishekvaidya.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.identity.name} — Full Stack & Cybersecurity Portfolio`,
    template: `%s | ${profile.identity.name}`,
  },
  description:
    'Full-stack developer and M.S. Cybersecurity candidate at UT Dallas. React, Next.js, cloud, and secure systems engineering.',
  keywords: [
    'Full Stack Developer',
    'Cybersecurity',
    'React',
    'Next.js',
    'UT Dallas',
    'CompTIA Security+',
    'TCS',
    'Dallas',
  ],
  authors: [{ name: profile.identity.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: profile.identity.name,
    title: `${profile.identity.name} — Full Stack & Cybersecurity Portfolio`,
    description:
      'Building scalable software and secure systems. Available for full-time roles.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.identity.name} — Portfolio`,
    description: 'Full-stack developer & cybersecurity graduate student at UT Dallas.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(inter.variable, jetbrainsMono.variable)}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var v=localStorage.getItem('portfolio-view');var s=new URLSearchParams(location.search).get('view');var m=s==='developer'||(s!=='security'&&v==='developer');document.documentElement.setAttribute('data-view',m?'developer':'security');if(m)document.documentElement.classList.remove('dark');else document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className={cn(inter.className, 'min-h-screen bg-background antialiased')}>
        <PersonJsonLd />
        <AppViewModeProvider>{children}</AppViewModeProvider>
        <Analytics />
      </body>
    </html>
  )
}

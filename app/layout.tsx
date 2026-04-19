import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/next'

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

export const metadata: Metadata = {
  title: 'Abhishek Vaidya — Cybersecurity & Full Stack',
  description:
    'Portfolio: cybersecurity graduate student at UT Dallas, full-stack engineer, secure systems and cloud.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn('dark', inter.variable, jetbrainsMono.variable)}>
      <body className={cn(inter.className, 'min-h-screen bg-background antialiased')}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}


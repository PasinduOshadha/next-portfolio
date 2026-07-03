import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pasinduoshadha.com'),
  title: 'Pasindu Oshadha — Senior WordPress & Next.js Developer',
  description: 'Performance-focused. SEO-driven. Scalable solutions. 9+ years engineering enterprise WordPress & headless Next.js.',
  openGraph: {
    title: 'Pasindu Oshadha — Senior Developer',
    description: 'Performance-focused. SEO-driven. Scalable solutions.',
    url: 'https://pasinduoshadha.com',
    siteName: 'Pasindu Oshadha',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}

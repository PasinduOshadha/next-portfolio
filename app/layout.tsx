import type { Metadata } from 'next'
import Script from 'next/script'
import type { ReactNode } from 'react'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ViewTransitions } from 'next-view-transitions'
import JsonLd from '../components/JsonLd'
import { rootGraph } from '../lib/schema'

export const metadata: Metadata = {
  metadataBase: new URL('https://pasinduoshadha.com'),
  title: 'Pasindu Oshadha — Senior WordPress & Next.js Developer',
  description: 'Performance-focused. SEO-driven. Scalable solutions. 9+ years engineering enterprise WordPress & headless Next.js.',
  openGraph: {
    title: 'Pasindu Oshadha — Senior Developer',
    description: 'Performance-focused. SEO-driven. Scalable solutions.',
    url: '/',
    siteName: 'Pasindu Oshadha',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en">
      <body>
        <JsonLd data={rootGraph()} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0LPSQT1K83"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0LPSQT1K83');
          `}
        </Script>
        {children}
        <SpeedInsights />
      </body>
      </html>
    </ViewTransitions>
  )
}

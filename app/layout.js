import { Sora } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-headline-runtime',
})

export const metadata = {
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={sora.variable}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}

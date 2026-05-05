import { Manrope, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-manrope',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
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
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}

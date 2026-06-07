import type { Metadata } from 'next'
import { Manrope, Inter, JetBrains_Mono } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import LenisProvider from '@/components/LenisProvider'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pasinduoshadha.com'),
  title: 'Pasindu Oshadha — Senior WordPress Engineer',
  description:
    'Senior WordPress engineer who understands the business before touching the code. 10+ years with agencies in AU, UK, and US.',
  openGraph: {
    title: 'Pasindu Oshadha — Senior WordPress Engineer',
    description:
      'Business-first engineering for agencies. 10+ years building WordPress sites for AU, UK, and US clients.',
    url: 'https://pasinduoshadha.com',
    siteName: 'Pasindu Oshadha',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        {/* Skip-to-content for keyboard / screen-reader users */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <LenisProvider>
          <Nav />
          {children}
          <Footer />
        </LenisProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}

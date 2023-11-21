import { DM_Sans } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
const dm_sans = DM_Sans({
  // weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'Pasindu Oshadha',
  description: 'Web Developer 💻',
  openGraph: {
    title: 'Pasindu Oshadha - Web Developer',
    description: 'Web Soulutoions Developer 💻',
    url: 'http://pasinduoshadha.com',
    siteName: 'Pasindu Oshadha',
    images: [
      {
        url: './images/opengraph-image.jpeg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        {children}
        </body>
    </html>
  )
}

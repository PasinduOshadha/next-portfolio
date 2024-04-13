import { Prompt } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
// const inter = Inter({ subsets: ['latin'] })
// const dm_sans = DM_Sans({
//   // weight: '400',
//   subsets: ['latin']
// })


const prompt = Prompt({
  weight: '400',
  subsets: ['latin']
})
export const metadata = {
  metadataBase: new URL('https://www.pasinduoshadha.com'),
  title: 'Pasindu Oshadha',
  description: 'Web Developer 💻',
  openGraph: {
    title: 'Pasindu Oshadha - Web Developer',
    description: 'Web Soulutoions Developer 💻',
    url: 'http://pasinduoshadha.com',
    siteName: 'Pasindu Oshadha',
    locale: 'en_US',
    type: 'website',
    images: './opnegraph-image.jpeg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        {children}
        <SpeedInsights/>
        </body>
    </html>
  )
}

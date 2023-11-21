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

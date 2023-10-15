import type { Metadata } from 'next'
import { Odibee_Sans } from 'next/font/google'
import StarsCanvas from '@/components/Canvas/StarCanvas'
import Header from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import './globals.css'

const odibeeSans = Odibee_Sans({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Android Club | VITC',
  description: 'Android Club VITC Official Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={odibeeSans.className}>
        <StarsCanvas />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

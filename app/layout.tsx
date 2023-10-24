import '../style/index.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pedro Catunda',
  description: 'Welcome to my personal portfolio!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Future addition? */}
      {/* <Script src='../vendor/cut.js' strategy='lazyOnload' /> */}
      <Script src='../vendor/scroll.js' strategy='lazyOnload' />
      <body className='l-wrapper c-wrapper'>{children}</body>
      
    </html>
  )
}

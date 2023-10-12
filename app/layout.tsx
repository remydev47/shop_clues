import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300','400', '500', '600', '700',]})

export const metadata: Metadata = {
  title: 'Shop Clue',
  description: 'Track Product Prices Effortlessly and Save Money on Your Online Shopping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <main className='max-w-10xl mx-auto'>
        <NavBar />
        {children}
       </main>
      </body>
    </html>
  )
}

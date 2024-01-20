import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { NextAuthProvider } from '@/providers/auth'
import Header from './components/Header/Header'
import TripSearch from './components/TripSearch/TripSearch'

//O nextJS já tem embutidas as fontes do google, por isso da pra simplesmente importar
const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: 'Fullstack - Trips',
  description: 'Sistema de reserva de viagens',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Header />
          <TripSearch/>  
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}

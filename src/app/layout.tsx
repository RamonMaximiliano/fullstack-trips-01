import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { NextAuthProvider } from '@/providers/auth'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

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
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}

/*

https://github.com/felipemotarocha/fullstackweek-trips


-----------------------------------------------------------------------------

MENSAGEM COMPRA SUCCESSFULL

MENSAGEM DELETE TRIP SUCCESSFULL

AJUSTAR FOOTER DISTANCE

USER LOGGED IN GET TRIPS RESERVATION, MAKE OF THE USER LOGGED, CURRENTLY IS HARD CODED THE USER ID



*/
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
https://www.linkedin.com/posts/pedroh-dev_bom-dia-galera-passando-para-compartilhar-activity-7084494958925144064-m5EG/?trk=public_profile_like_view

- Adicionar funcionalidade de pesquisas da pagina inicial

-----------------------------------------------------------------------------

PAGINA MINHAS VIAGENS:
- Opção de deletar viagem do banco quando estiver vendo "ver minhas viagens"


MENSAGEM COMPRA SUCCESSFULL:


SEARCH NA PAGINA INICIAL:



*/
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

MENSAGEM COMPRA SUCCESSFULL:

DELETAR: SEARCH NA PAGINA INICIAL: Colocar outra frase exemplo:

"Bem vindo ao Bon Voyage, seu melhor agente de viagens!
Encontre sua proóxima viagem!"


COLOCAR O QUICK SEARCH DENTRO DO RECOMMENDED TRIPS E FILTRAR CONFORME OS BOTÕES
* Não precisa colocar um dentro do outro pra filtrar




*/
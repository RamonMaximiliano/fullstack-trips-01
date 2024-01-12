"use client"

//Qualquer component com interatividade no Next.js precisa ter este "use client", para mostrar ao next.js que ele é um client component ao invés de um server component, ou seja este componente vai ter iteratividade

import { SessionProvider } from "next-auth/react"

type Props = {
    children?:React.ReactNode;
}

export const NextAuthProvider = ({children}:Props) =>{
    return <SessionProvider>{children}</SessionProvider>
}


/*

Similar a criar uma context API Provider
Mas para autenticar o usuário ao invés

*/
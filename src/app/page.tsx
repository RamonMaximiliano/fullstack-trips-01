"use client"
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const {data} = useSession();
  return (
    <>

    <div>
      <button onClick={()=>{signIn()}}>Login</button><br/>
      <button onClick={()=>{signOut()}}>Logout</button>
    </div>
      <h1>Olá {data?.user?.name}</h1>
      <img src={data?.user?.image ?? ""} alt=""/>
    </>
  )
}

/*

Rodar antes de dar o npm run dev
npx prisma generate





*/
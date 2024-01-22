"use client"
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const {data} = useSession();
  return (
    <>

    </>
  )
}

/*

Rodar antes de dar o npm run dev
npx prisma generate


*/
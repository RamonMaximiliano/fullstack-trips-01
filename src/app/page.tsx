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










  //Added by me due to tailwind extension not working
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "css.validate": false,
  "editor.inlineSuggest.enabled": true

    //Added by me due to tailwind extension not working



*/
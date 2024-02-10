"use client"
import React from "react";
import { getSession } from "next-auth/react";

  async function myFunction() {
    const session = await getSession()
    console.log(session)
  }

export default function MinhasViagens() {
    return (
        <div className="bg-gray-400">
            Minhas viagens
        </div>
    );
}



/*

Fetch minhas viagens aqui:
http://localhost:3000/apitripreser


*/

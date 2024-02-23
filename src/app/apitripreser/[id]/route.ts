import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: { params: { id: string } }){
  const id = params.id
  const deleting = await prisma.tripReservation.delete({
    where: {id}
  })
  return NextResponse.json(deleting) 
}


/* 

MÉTODO QUE FUNCIONOU:
export async function DELETE(request: Request, { params }: { params: { id: string } }){
          const id = params.id
          const deleting = await prisma.tripReservation.delete({
            where: {id}
          })
          return NextResponse.json(deleting) 
}


O Params tem que ser destructured: "where: {id}", não estava funcionando pois estava passando "where: id"


LEARNED FROM:
https://www.youtube.com/watch?v=GxUR4zIasB8&ab_channel=CodeRyan

*/



/*

PARA TESTAR SE ESTA ENVIANDO O PARAM CORRETO:
export async function DELETE(request: Request, { params }: { params: { id: string } }){
          const id = params.id
           console.log(id)
          console.log({id}) 
          return NextResponse.json(request) 
}


Also check:
https://www.mozzlog.com/blog/delete-request-api-route-nextjs
         
*/  


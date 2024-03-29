import { prisma } from "@/lib/prisma";
import {NextResponse} from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";

export async function GET(){
    const reservs = await prisma.tripReservation.findMany();
    return new NextResponse(JSON.stringify(reservs), {status:200});
}

export async function POST(request: Request){
    const req:any = await request.json();
    const { start, end, userId, tripId, totalPaid, guests, picture, hotel, country, location } = req;

    await prisma.tripReservation.create({
        data: {
          start,
          end,
          userId,
          tripId,
          totalPaid,
          guests,
          picture,
          hotel,
          country,
          location
        },
       
      });

      return new NextResponse(
        JSON.stringify({
          success: true,
        }),
        { status: 201 }
      );
    }



/*

Neste arquivo somente foi criada a URL da API para a table TripReservation somente
http://localhost:3000/apitripreser

Da para coletar dados e inserir com esta API

*/
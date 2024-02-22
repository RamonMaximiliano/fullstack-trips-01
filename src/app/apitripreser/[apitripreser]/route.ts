import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";


export async function DELETE(req: NextApiRequest, res:NextApiResponse ){

        const id = req.query.id
        const testresult = await prisma.tripReservation.delete({
          where: {
            //@ts-ignore
            id: id,
          },
        });
        res.status(200).json({testresult})
}



/*ORIGINAL*/

/* 

export async function DELETE(_request: Request, { params: { reservationId } }: { params: { reservationId: string } }) {
    if (!reservationId) {
      return {
        status: 400,
        body: {
          message: "Missing reservationId",
        },
      };
    }
  
    const reservation = await prisma.tripReservation.delete({
      where: {
        id: reservationId,
      },
    });
  
    return new NextResponse(JSON.stringify(reservation), { status: 200 }); 
  }
*/
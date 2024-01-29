import React from "react";
import { prisma } from "@/lib/prisma";


async function getDetails(tripid: string) {
    const tripsDetail = await prisma.trip.findUnique({
        where: {
            id: tripid,
        },
    });
    return tripsDetail;
}


export default async function TripDetails({ params }: { params: { tripid: string } }) {
    const tripDetails = await getDetails(params.tripid);
    return (
        <>
         {<p>{tripDetails?.id}</p>}
        </>
    )
}



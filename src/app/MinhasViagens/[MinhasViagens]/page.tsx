/*Server component*/
import React from "react";
import { prisma } from "@/lib/prisma";
import { User, TripReservation } from "@prisma/client";

async function getUsers() {
    const users = await prisma.user.findMany().finally(() => {
        prisma.$disconnect();
    });
    if (users) {
        return users;
    }
}

async function getReservation() {
    const trips = await prisma.tripReservation.findMany().finally(() => {
        prisma.$disconnect();
    });
    if (trips) {
        return trips;
    }
}

export default async function MinhasViagens({ params }: { params: { MinhasViagens: string } }) {
    const users: any = await getUsers();
    const trips: any = await getReservation();
    const userEnd = params.MinhasViagens.replace("%20"," ")
    const userID = users.find((item:User)=>{
        return item.name == userEnd
    })
    const MyTrips = trips.filter((item:TripReservation)=>{
        return item.userId == userID.id
    })
    return (
        <div className="bg-gray-400">
            <h1>Minhas viagens</h1>
            
            {
                MyTrips.map((item: TripReservation) => 
                <div>
                    <p>Data:</p>
                    <p>{item.start} - {item.end}</p>
                    <p>Preço total:</p>
                    {Number(item.totalPaid)}          
                    <p>Data:</p>
                    <p>{item.start} - {item.end}</p>
                    <p>Pictute:</p>
                    {item.picture}          
                    <p>Name:</p>
                    <p>{item.hotel}</p>
                    <p>Flag:</p>
                    {item.country}          
                    <p>Location:</p>
                    {item.location}          
                </div>)
            }
        </div>
    );
}





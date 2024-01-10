import {prisma} from "@/lib/prisma";
import React from "react"; 

const getTrips = async () =>{
  const trips = await prisma.trip.findMany({});

  return trips;
}


const Trips = async () =>{
  const data = await getTrips();

  console.log({data})

  return <>Trips</>
};

export default Trips;
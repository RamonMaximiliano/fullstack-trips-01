/*Server component*/
import React from "react";
import TripItem from "../TripItem/TripItem";
import { Trip } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { AnyRecord } from "dns";

async function getTrips(){
  const trips = await prisma.trip.findMany().finally(() => {
    prisma.$disconnect();
  });
  if (trips) {
    return trips;
}
}

export default async function RecommendedTrips() {

 /*
 
 const tripsdata = await fetch("http://localhost:3000/apicon").then((data) => { return data.json() }) 
 com a função acima getTrips, foi desnecessário esta API em função de importar diretamente neste component os dados do banco

 */

const data:any = await getTrips();


  return (
    <>
      <div className="container flex justify-between items-center p-2 m-auto lg:w-3/4 lg:px-8">
        <div className="bg-gray-500 w-full h-[2px]"></div>
        <h3 className="text-gray-500 whitespace-nowrap mx-2">Destinos recomendados</h3>
        <div className="bg-gray-500 w-full h-[2px]"></div>
      </div>
      <div className="w-72 flex justify-between items-center flex-col my-5 m-auto lg:flex-row lg:w-3/4 lg:flex-wrap lg:px-2">
      {
          data.map((item: Trip) => <TripItem key={item.id} trip={item} />)
      }
      </div>
    </>
  )
}



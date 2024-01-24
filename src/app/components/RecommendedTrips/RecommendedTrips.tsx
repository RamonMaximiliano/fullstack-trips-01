import React from "react";
import TripItem from "../TripItem/TripItem";
import { Trip } from "@prisma/client";

export default async function RecommendedTrips() {

  const tripsdata = await fetch("http://localhost:3000/apicon").then((data) => { return data.json() })

  console.log(tripsdata)
  return (
    <>
      <div className="container flex justify-between items-center">
        <div className="bg-gray-500 w-full h-[2px]"></div>
        <h3 className="text-gray-500 whitespace-nowrap mx-2">Destinos recomendados</h3>
        <div className="bg-gray-500 w-full h-[2px]"></div>
      </div>
      {
        tripsdata.map((item: Trip) => <TripItem key={item.id} trip={item} />)
      }
    </>
  )
}


/*

http://localhost:3000/apicon

*/ 
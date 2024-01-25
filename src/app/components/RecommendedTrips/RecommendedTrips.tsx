import React from "react";
import TripItem from "../TripItem/TripItem";
import { Trip } from "@prisma/client";

export default async function RecommendedTrips() {

  const tripsdata = await fetch("http://localhost:3000/apicon").then((data) => { return data.json() })

  return (
    <>
      <div className="container flex justify-between items-center p-2 m-auto">
        <div className="bg-gray-500 w-full h-[2px]"></div>
        <h3 className="text-gray-500 whitespace-nowrap mx-2">Destinos recomendados</h3>
        <div className="bg-gray-500 w-full h-[2px]"></div>
      </div>
      <div className="w-72 flex justify-between items-center flex-col my-5 m-auto">
      {
        tripsdata.map((item: Trip) => <TripItem key={item.id} trip={item} />)
      }
      </div>
    </>
  )
}



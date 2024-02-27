"use client"
import { Trip } from "@prisma/client";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";

export type TripItemsProps = {
  trip: Trip;
}

export default function TripItem(props: TripItemsProps) {
  return (
    <Link href={`/trips/${props.trip.id}`}>

      {/* 
O trip detail component virou uma rota, portanto ao clicar neste TripItem, vai direcionar para aquela rota conforma o ID que ele receber
*/}
      <div className="text-gray-500 container mx-auto my-2 lg:w-5/6 hover:scale-105 duration-200 hover:shadow-xl rounded-lg p-2 hover:bg-gray-100">
        <img src={props.trip.coverImage} className="rounded-lg h-60 w-72" alt="foto" />
        <div className="leading-6">
          <h1 className="font-bold">{props.trip.name}</h1>
          <div className="flex items-center my-0.3"><ReactCountryFlag countryCode={props.trip.countryCode} svg /><p className="text-sm ml-2">{props.trip.location}</p>
          </div>
          <p className="text-sm leading-6"><span className="text-primary font-bold">R${Number(props.trip.pricePerDay)}</span> por noite</p>
        </div>
      </div>
    </Link>
  )
}


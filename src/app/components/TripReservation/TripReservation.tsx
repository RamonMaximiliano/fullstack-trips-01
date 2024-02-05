"use client"
import { Trip } from "@prisma/client";
import React, { useState } from "react";

export type TripItemsProps = {
    trip: Trip;
}

export default function TripReservation(props: TripItemsProps & { startDate: string, endDate: string }): React.JSX.Element {
    const [tripTotal, setTripTotal] = useState(0);
    const { trip, startDate, endDate } = props;

    return (
        <div className="leading-7 mx-auto w-11/12 my-2">
            <div className="flex my-2">
                <input className="p-2 rounded-lg w-2/4 mr-1 border-2 border-gray-300" placeholder="Data de inicio" type="date" min={startDate} max={endDate}></input>
                <input className="p-2 rounded-lg w-2/4 ml-1 border-2 border-gray-300" placeholder="Data final" type="date" min={startDate} max={endDate}></input>
            </div>
            <input placeholder={`Numero de hospedes (max:${trip.maxGuests || 'N/A'})`} className="p-2 rounded-lg w-full border-2 border-gray-300 mt-1" type="number" min="1" max="5" onChange={(e) => setTripTotal(Number(e.target.value))}></input>
            <div className="flex font-bold w-full justify-between text-gray-500 my-2 mt-3">
                <p>Total:</p>
                <p>R$ {tripTotal * Number(trip.pricePerDay)}</p>
            </div>
            <button className="w-full rounded-lg p-2 text-white bg-primary border-none mb-5">Reservar agora</button>
            <div className="bg-gray-400 w-full h-[2px] my-2"></div>
        </div>
    )
}


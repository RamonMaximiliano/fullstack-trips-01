"use client"
import React from "react";
import Link from "next/link";

type purchasedTrip = {
    id: string,
    price: number,
    startdate: string,
    enddate: string,
    guests:number,
    picture:string,
    hotel:string,
    country:string,
    location:string
  }

export default function ReservarButton(props:purchasedTrip) {
    async function logReservation(){
        const response = await fetch("http://localhost:3000/apitripreser",{
            method:"POST",
            body: Buffer.from(
                JSON.stringify({
                    tripId: props.id,
                    start: props.startdate,
                    end: props.enddate,
                    userId: "clrb0oo360000lmto7tcj2cxo",
                    totalPaid: props.price,
                    guests:props.guests,
                    picture:props.picture,
                    hotel:props.hotel,
                    country:props.country,
                    location:props.location
                })
            ),
       });
    }
    return (
        <><Link href={`/`}>
            <button className="hover:bg-primary w-[100%] p-2 my-10 rounded-xl hover:text-white font-semibold mb-40 border-2 hover:border-2 bg-white text-primary duration-200 border-purple-600" onClick={logReservation}>Finalizar compra</button>
            </Link>
        </>
    )
}


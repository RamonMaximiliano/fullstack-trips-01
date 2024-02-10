"use client"
import React from "react";
import { getSession } from "next-auth/react";

type purchasedTrip = {
    id: string,
    price: number,
    startdate: string,
    enddate: string,
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
                })
            ),
       });
    }
    return (
        <>
            <button className="bg-primary w-[100%] p-2 my-10 rounded-xl text-white font-semibold hover:bg-primaryHover mb-40" onClick={logReservation}>Finalizar compra</button>
        </>
    )
}
